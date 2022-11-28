import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FloodlightActivityDynamicTag } from "./floodlightactivitydynamictag";
import { DimensionValue } from "./dimensionvalue";



// FloodlightActivityPublisherDynamicTag
/** 
 * Publisher Dynamic Tag
**/
export class FloodlightActivityPublisherDynamicTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickThrough" })
  clickThrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=directorySiteId" })
  directorySiteId?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamicTag" })
  dynamicTag?: FloodlightActivityDynamicTag;

  @SpeakeasyMetadata({ data: "json, name=siteId" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=siteIdDimensionValue" })
  siteIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=viewThrough" })
  viewThrough?: boolean;
}
