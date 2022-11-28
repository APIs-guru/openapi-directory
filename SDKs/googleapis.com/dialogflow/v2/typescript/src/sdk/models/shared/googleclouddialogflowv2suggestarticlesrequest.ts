import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AssistQueryParameters } from "./googleclouddialogflowv2assistqueryparameters";



// GoogleCloudDialogflowV2SuggestArticlesRequest
/** 
 * The request message for Participants.SuggestArticles.
**/
export class GoogleCloudDialogflowV2SuggestArticlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assistQueryParams" })
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;

  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
