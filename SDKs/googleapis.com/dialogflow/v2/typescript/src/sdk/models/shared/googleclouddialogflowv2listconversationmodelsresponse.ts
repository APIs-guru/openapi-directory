import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2ConversationModel } from "./googleclouddialogflowv2conversationmodel";


// GoogleCloudDialogflowV2ListConversationModelsResponse
/** 
 * The response message for ConversationModels.ListConversationModels
**/
export class GoogleCloudDialogflowV2ListConversationModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationModels", elemType: shared.GoogleCloudDialogflowV2ConversationModel })
  conversationModels?: GoogleCloudDialogflowV2ConversationModel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
