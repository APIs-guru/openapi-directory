import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionGeoTargetArea
/** 
 * A list of geotargets that defines the region area.
**/
export class RegionGeoTargetArea extends SpeakeasyBase {
  @Metadata({ data: "json, name=geotargetCriteriaIds" })
  geotargetCriteriaIds?: string[];
}
