import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2ConversationModelEvaluation } from "./googleclouddialogflowv2conversationmodelevaluation";


// GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse
/** 
 * The response message for ConversationModels.ListConversationModelEvaluations
**/
export class GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationModelEvaluations", elemType: shared.GoogleCloudDialogflowV2ConversationModelEvaluation })
  conversationModelEvaluations?: GoogleCloudDialogflowV2ConversationModelEvaluation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
