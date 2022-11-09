import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2ConversationInfo } from "./googleclouddialogflowv2conversationinfo";
import { GoogleCloudDialogflowV2InputConfig } from "./googleclouddialogflowv2inputconfig";


// GoogleCloudDialogflowV2ConversationDataset
/** 
 * Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
**/
export class GoogleCloudDialogflowV2ConversationDataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationCount" })
  conversationCount?: string;

  @Metadata({ data: "json, name=conversationInfo" })
  conversationInfo?: GoogleCloudDialogflowV2ConversationInfo;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDialogflowV2InputConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
