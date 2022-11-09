import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult } from "./googlecloudretailv2alphacompletequeryresponsecompletionresult";
import { GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2alphacompletequeryresponserecentsearchresult";


// GoogleCloudRetailV2alphaCompleteQueryResponse
/** 
 * Response of the auto-complete query.
**/
export class GoogleCloudRetailV2alphaCompleteQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=completionResults", elemType: shared.GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult })
  completionResults?: GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult[];

  @Metadata({ data: "json, name=recentSearchResults", elemType: shared.GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult })
  recentSearchResults?: GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult[];
}
