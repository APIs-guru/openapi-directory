import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeoRegionSearchTerms
/** 
 * Search terms for geo region targeting options.
**/
export class GeoRegionSearchTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=geoRegionQuery" })
  geoRegionQuery?: string;
}
