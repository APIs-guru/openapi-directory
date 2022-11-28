import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchResult } from "./searchresult";



// SearchResponse
/** 
 * The response to a search request for the authenticated user, given a query.
**/
export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: SearchResult })
  results?: SearchResult[];
}
