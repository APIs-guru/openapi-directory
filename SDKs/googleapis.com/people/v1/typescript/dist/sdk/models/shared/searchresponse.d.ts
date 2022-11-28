import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResult } from "./searchresult";
/**
 * The response to a search request for the authenticated user, given a query.
**/
export declare class SearchResponse extends SpeakeasyBase {
    results?: SearchResult[];
}
