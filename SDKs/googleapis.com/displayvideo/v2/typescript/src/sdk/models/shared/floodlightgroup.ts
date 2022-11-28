import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveViewVideoViewabilityMetricConfig } from "./activeviewvideoviewabilitymetricconfig";
import { LookbackWindow } from "./lookbackwindow";


export enum FloodlightGroupWebTagTypeEnum {
    WebTagTypeUnspecified = "WEB_TAG_TYPE_UNSPECIFIED",
    WebTagTypeNone = "WEB_TAG_TYPE_NONE",
    WebTagTypeImage = "WEB_TAG_TYPE_IMAGE",
    WebTagTypeDynamic = "WEB_TAG_TYPE_DYNAMIC"
}


// FloodlightGroup
/** 
 * A single Floodlight group.
**/
export class FloodlightGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeViewConfig" })
  activeViewConfig?: ActiveViewVideoViewabilityMetricConfig;

  @SpeakeasyMetadata({ data: "json, name=customVariables" })
  customVariables?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=floodlightGroupId" })
  floodlightGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=lookbackWindow" })
  lookbackWindow?: LookbackWindow;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=webTagType" })
  webTagType?: FloodlightGroupWebTagTypeEnum;
}
