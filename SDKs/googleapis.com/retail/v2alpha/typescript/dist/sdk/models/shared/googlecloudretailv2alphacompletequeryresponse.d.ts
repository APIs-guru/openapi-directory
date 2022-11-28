import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult } from "./googlecloudretailv2alphacompletequeryresponseattributeresult";
import { GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult } from "./googlecloudretailv2alphacompletequeryresponsecompletionresult";
import { GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2alphacompletequeryresponserecentsearchresult";
/**
 * Response of the auto-complete query.
**/
export declare class GoogleCloudRetailV2alphaCompleteQueryResponse extends SpeakeasyBase {
    attributeResults?: Map<string, GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult>;
    attributionToken?: string;
    completionResults?: GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult[];
    recentSearchResults?: GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult[];
}
