import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CompleteQueryResponseCompletionResult } from "./googlecloudretailv2completequeryresponsecompletionresult";
import { GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2completequeryresponserecentsearchresult";
/**
 * Response of the auto-complete query.
**/
export declare class GoogleCloudRetailV2CompleteQueryResponse extends SpeakeasyBase {
    attributionToken?: string;
    completionResults?: GoogleCloudRetailV2CompleteQueryResponseCompletionResult[];
    recentSearchResults?: GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult[];
}
