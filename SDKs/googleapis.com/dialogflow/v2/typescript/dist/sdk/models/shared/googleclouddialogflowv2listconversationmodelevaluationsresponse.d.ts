import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationModelEvaluation } from "./googleclouddialogflowv2conversationmodelevaluation";
/**
 * The response message for ConversationModels.ListConversationModelEvaluations
**/
export declare class GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse extends SpeakeasyBase {
    conversationModelEvaluations?: GoogleCloudDialogflowV2ConversationModelEvaluation[];
    nextPageToken?: string;
}
