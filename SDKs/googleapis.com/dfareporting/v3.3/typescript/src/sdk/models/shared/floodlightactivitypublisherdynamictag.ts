import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FloodlightActivityDynamicTag } from "./floodlightactivitydynamictag";
import { DimensionValue } from "./dimensionvalue";


// FloodlightActivityPublisherDynamicTag
/** 
 * Publisher Dynamic Tag
**/
export class FloodlightActivityPublisherDynamicTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickThrough" })
  clickThrough?: boolean;

  @Metadata({ data: "json, name=directorySiteId" })
  directorySiteId?: string;

  @Metadata({ data: "json, name=dynamicTag" })
  dynamicTag?: FloodlightActivityDynamicTag;

  @Metadata({ data: "json, name=siteId" })
  siteId?: string;

  @Metadata({ data: "json, name=siteIdDimensionValue" })
  siteIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=viewThrough" })
  viewThrough?: boolean;
}
