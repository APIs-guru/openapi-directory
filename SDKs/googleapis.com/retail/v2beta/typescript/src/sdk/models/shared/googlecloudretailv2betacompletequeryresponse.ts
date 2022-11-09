import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult } from "./googlecloudretailv2betacompletequeryresponsecompletionresult";
import { GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2betacompletequeryresponserecentsearchresult";


// GoogleCloudRetailV2betaCompleteQueryResponse
/** 
 * Response of the auto-complete query.
**/
export class GoogleCloudRetailV2betaCompleteQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=completionResults", elemType: shared.GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult })
  completionResults?: GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult[];

  @Metadata({ data: "json, name=recentSearchResults", elemType: shared.GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult })
  recentSearchResults?: GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult[];
}
