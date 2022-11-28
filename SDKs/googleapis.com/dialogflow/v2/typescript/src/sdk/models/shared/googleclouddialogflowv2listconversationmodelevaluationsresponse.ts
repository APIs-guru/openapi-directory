import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationModelEvaluation } from "./googleclouddialogflowv2conversationmodelevaluation";



// GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse
/** 
 * The response message for ConversationModels.ListConversationModelEvaluations
**/
export class GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationModelEvaluations", elemType: GoogleCloudDialogflowV2ConversationModelEvaluation })
  conversationModelEvaluations?: GoogleCloudDialogflowV2ConversationModelEvaluation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
