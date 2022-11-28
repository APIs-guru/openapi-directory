import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSearchResult } from "./resourcesearchresult";
/**
 * Search all resources response.
**/
export declare class SearchAllResourcesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    results?: ResourceSearchResult[];
}
