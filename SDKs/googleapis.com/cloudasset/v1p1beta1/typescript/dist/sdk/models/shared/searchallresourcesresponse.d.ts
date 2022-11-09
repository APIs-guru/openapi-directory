import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardResourceMetadata } from "./standardresourcemetadata";
/**
 * Search all resources response.
**/
export declare class SearchAllResourcesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    results?: StandardResourceMetadata[];
}
