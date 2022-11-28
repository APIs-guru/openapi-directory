import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Conversation } from "./googleclouddialogflowv2beta1conversation";
/**
 * The response message for Conversations.ListConversations.
**/
export declare class GoogleCloudDialogflowV2beta1ListConversationsResponse extends SpeakeasyBase {
    conversations?: GoogleCloudDialogflowV2beta1Conversation[];
    nextPageToken?: string;
}
