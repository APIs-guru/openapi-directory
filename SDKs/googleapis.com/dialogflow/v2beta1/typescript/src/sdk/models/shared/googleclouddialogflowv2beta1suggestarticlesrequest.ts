import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1AssistQueryParameters } from "./googleclouddialogflowv2beta1assistqueryparameters";


// GoogleCloudDialogflowV2beta1SuggestArticlesRequest
/** 
 * The request message for Participants.SuggestArticles.
**/
export class GoogleCloudDialogflowV2beta1SuggestArticlesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assistQueryParams" })
  assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;

  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
