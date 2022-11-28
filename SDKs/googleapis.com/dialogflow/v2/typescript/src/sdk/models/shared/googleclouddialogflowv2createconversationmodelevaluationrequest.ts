import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationModelEvaluationInput } from "./googleclouddialogflowv2conversationmodelevaluation";



// GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput
/** 
 * The request message for ConversationModels.CreateConversationModelEvaluation
**/
export class GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationModelEvaluation" })
  conversationModelEvaluation?: GoogleCloudDialogflowV2ConversationModelEvaluationInput;
}
