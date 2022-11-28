import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegionGeoTargetArea
/** 
 * A list of geotargets that defines the region area.
**/
export class RegionGeoTargetArea extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geotargetCriteriaIds" })
  geotargetCriteriaIds?: string[];
}
