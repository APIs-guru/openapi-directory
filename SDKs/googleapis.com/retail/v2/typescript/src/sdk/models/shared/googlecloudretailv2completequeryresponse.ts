import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CompleteQueryResponseCompletionResult } from "./googlecloudretailv2completequeryresponsecompletionresult";
import { GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2completequeryresponserecentsearchresult";



// GoogleCloudRetailV2CompleteQueryResponse
/** 
 * Response of the auto-complete query.
**/
export class GoogleCloudRetailV2CompleteQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=completionResults", elemType: GoogleCloudRetailV2CompleteQueryResponseCompletionResult })
  completionResults?: GoogleCloudRetailV2CompleteQueryResponseCompletionResult[];

  @SpeakeasyMetadata({ data: "json, name=recentSearchResults", elemType: GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult })
  recentSearchResults?: GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult[];
}
