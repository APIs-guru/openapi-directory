import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Conversation } from "./googleclouddialogflowv2conversation";
/**
 * The response message for Conversations.ListConversations.
**/
export declare class GoogleCloudDialogflowV2ListConversationsResponse extends SpeakeasyBase {
    conversations?: GoogleCloudDialogflowV2Conversation[];
    nextPageToken?: string;
}
