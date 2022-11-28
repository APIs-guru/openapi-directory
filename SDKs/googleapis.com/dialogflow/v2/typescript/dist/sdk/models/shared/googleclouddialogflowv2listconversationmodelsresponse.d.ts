import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationModel } from "./googleclouddialogflowv2conversationmodel";
/**
 * The response message for ConversationModels.ListConversationModels
**/
export declare class GoogleCloudDialogflowV2ListConversationModelsResponse extends SpeakeasyBase {
    conversationModels?: GoogleCloudDialogflowV2ConversationModel[];
    nextPageToken?: string;
}
