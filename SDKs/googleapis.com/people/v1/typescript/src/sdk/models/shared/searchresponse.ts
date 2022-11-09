import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchResult } from "./searchresult";


// SearchResponse
/** 
 * The response to a search request for the authenticated user, given a query.
**/
export class SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.SearchResult })
  results?: SearchResult[];
}
