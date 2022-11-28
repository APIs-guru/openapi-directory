import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
import { SearchResultSnippet } from "./searchresultsnippet";
/**
 * A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.
**/
export declare class SearchResult extends SpeakeasyBase {
    etag?: string;
    id?: ResourceId;
    kind?: string;
    snippet?: SearchResultSnippet;
}
