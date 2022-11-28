import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Conversation } from "./googleclouddialogflowv2beta1conversation";



// GoogleCloudDialogflowV2beta1ListConversationsResponse
/** 
 * The response message for Conversations.ListConversations.
**/
export class GoogleCloudDialogflowV2beta1ListConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: GoogleCloudDialogflowV2beta1Conversation })
  conversations?: GoogleCloudDialogflowV2beta1Conversation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
