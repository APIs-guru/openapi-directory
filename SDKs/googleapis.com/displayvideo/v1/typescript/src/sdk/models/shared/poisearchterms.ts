import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PoiSearchTerms
/** 
 * Search terms for POI targeting options.
**/
export class PoiSearchTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=poiQuery" })
  poiQuery?: string;
}
