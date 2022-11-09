import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Conversation } from "./googleclouddialogflowv2conversation";


// GoogleCloudDialogflowV2ListConversationsResponse
/** 
 * The response message for Conversations.ListConversations.
**/
export class GoogleCloudDialogflowV2ListConversationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.GoogleCloudDialogflowV2Conversation })
  conversations?: GoogleCloudDialogflowV2Conversation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
