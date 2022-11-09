import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PoiSearchTerms
/** 
 * Search terms for POI targeting options.
**/
export class PoiSearchTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=poiQuery" })
  poiQuery?: string;
}
