import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult } from "./googlecloudretailv2betacompletequeryresponsecompletionresult";
import { GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2betacompletequeryresponserecentsearchresult";



// GoogleCloudRetailV2betaCompleteQueryResponse
/** 
 * Response of the auto-complete query.
**/
export class GoogleCloudRetailV2betaCompleteQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=completionResults", elemType: GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult })
  completionResults?: GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult[];

  @SpeakeasyMetadata({ data: "json, name=recentSearchResults", elemType: GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult })
  recentSearchResults?: GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult[];
}
