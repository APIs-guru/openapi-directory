import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Conversation } from "./googleclouddialogflowv2conversation";



// GoogleCloudDialogflowV2ListConversationsResponse
/** 
 * The response message for Conversations.ListConversations.
**/
export class GoogleCloudDialogflowV2ListConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: GoogleCloudDialogflowV2Conversation })
  conversations?: GoogleCloudDialogflowV2Conversation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
