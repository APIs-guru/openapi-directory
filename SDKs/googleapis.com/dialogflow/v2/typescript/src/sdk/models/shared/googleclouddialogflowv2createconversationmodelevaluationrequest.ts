import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2ConversationModelEvaluation } from "./googleclouddialogflowv2conversationmodelevaluation";


// GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest
/** 
 * The request message for ConversationModels.CreateConversationModelEvaluation
**/
export class GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationModelEvaluation" })
  conversationModelEvaluation?: GoogleCloudDialogflowV2ConversationModelEvaluation;
}
