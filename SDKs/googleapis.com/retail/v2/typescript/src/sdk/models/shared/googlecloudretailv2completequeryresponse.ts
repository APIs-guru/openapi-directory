import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2CompleteQueryResponseCompletionResult } from "./googlecloudretailv2completequeryresponsecompletionresult";
import { GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2completequeryresponserecentsearchresult";


// GoogleCloudRetailV2CompleteQueryResponse
/** 
 * Response of the auto-complete query.
**/
export class GoogleCloudRetailV2CompleteQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=completionResults", elemType: shared.GoogleCloudRetailV2CompleteQueryResponseCompletionResult })
  completionResults?: GoogleCloudRetailV2CompleteQueryResponseCompletionResult[];

  @Metadata({ data: "json, name=recentSearchResults", elemType: shared.GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult })
  recentSearchResults?: GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult[];
}
