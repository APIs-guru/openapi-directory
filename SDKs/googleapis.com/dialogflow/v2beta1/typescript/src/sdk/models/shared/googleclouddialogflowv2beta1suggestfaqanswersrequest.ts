import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AssistQueryParameters } from "./googleclouddialogflowv2beta1assistqueryparameters";



// GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest
/** 
 * The request message for Participants.SuggestFaqAnswers.
**/
export class GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assistQueryParams" })
  assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;

  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
