import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActiveViewVideoViewabilityMetricConfig } from "./activeviewvideoviewabilitymetricconfig";
import { LookbackWindow } from "./lookbackwindow";

export enum FloodlightGroupWebTagTypeEnum {
    WebTagTypeUnspecified = "WEB_TAG_TYPE_UNSPECIFIED"
,    WebTagTypeNone = "WEB_TAG_TYPE_NONE"
,    WebTagTypeImage = "WEB_TAG_TYPE_IMAGE"
,    WebTagTypeDynamic = "WEB_TAG_TYPE_DYNAMIC"
}


// FloodlightGroup
/** 
 * A single Floodlight group.
**/
export class FloodlightGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeViewConfig" })
  activeViewConfig?: ActiveViewVideoViewabilityMetricConfig;

  @Metadata({ data: "json, name=customVariables" })
  customVariables?: Map<string, any>;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=floodlightGroupId" })
  floodlightGroupId?: string;

  @Metadata({ data: "json, name=lookbackWindow" })
  lookbackWindow?: LookbackWindow;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=webTagType" })
  webTagType?: FloodlightGroupWebTagTypeEnum;
}
