import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Conversation } from "./googleclouddialogflowv2beta1conversation";


// GoogleCloudDialogflowV2beta1ListConversationsResponse
/** 
 * The response message for Conversations.ListConversations.
**/
export class GoogleCloudDialogflowV2beta1ListConversationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.GoogleCloudDialogflowV2beta1Conversation })
  conversations?: GoogleCloudDialogflowV2beta1Conversation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
