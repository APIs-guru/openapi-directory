import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult } from "./googlecloudretailv2alphacompletequeryresponseattributeresult";
import { GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult } from "./googlecloudretailv2alphacompletequeryresponsecompletionresult";
import { GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2alphacompletequeryresponserecentsearchresult";



// GoogleCloudRetailV2alphaCompleteQueryResponse
/** 
 * Response of the auto-complete query.
**/
export class GoogleCloudRetailV2alphaCompleteQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeResults", elemType: GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult })
  attributeResults?: Map<string, GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult>;

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=completionResults", elemType: GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult })
  completionResults?: GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult[];

  @SpeakeasyMetadata({ data: "json, name=recentSearchResults", elemType: GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult })
  recentSearchResults?: GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult[];
}
