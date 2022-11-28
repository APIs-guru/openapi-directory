import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationModel } from "./googleclouddialogflowv2conversationmodel";



// GoogleCloudDialogflowV2ListConversationModelsResponse
/** 
 * The response message for ConversationModels.ListConversationModels
**/
export class GoogleCloudDialogflowV2ListConversationModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationModels", elemType: GoogleCloudDialogflowV2ConversationModel })
  conversationModels?: GoogleCloudDialogflowV2ConversationModel[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
