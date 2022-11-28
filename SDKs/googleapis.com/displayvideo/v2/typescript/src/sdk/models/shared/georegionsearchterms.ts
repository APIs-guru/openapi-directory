import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeoRegionSearchTerms
/** 
 * Search terms for geo region targeting options.
**/
export class GeoRegionSearchTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geoRegionQuery" })
  geoRegionQuery?: string;
}
