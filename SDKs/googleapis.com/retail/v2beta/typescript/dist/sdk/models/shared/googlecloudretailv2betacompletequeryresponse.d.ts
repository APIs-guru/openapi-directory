import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult } from "./googlecloudretailv2betacompletequeryresponsecompletionresult";
import { GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2betacompletequeryresponserecentsearchresult";
/**
 * Response of the auto-complete query.
**/
export declare class GoogleCloudRetailV2betaCompleteQueryResponse extends SpeakeasyBase {
    attributionToken?: string;
    completionResults?: GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult[];
    recentSearchResults?: GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult[];
}
