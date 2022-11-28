import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationInfo } from "./googleclouddialogflowv2conversationinfo";
import { GoogleCloudDialogflowV2InputConfig } from "./googleclouddialogflowv2inputconfig";



// GoogleCloudDialogflowV2ConversationDataset
/** 
 * Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
**/
export class GoogleCloudDialogflowV2ConversationDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationCount" })
  conversationCount?: string;

  @SpeakeasyMetadata({ data: "json, name=conversationInfo" })
  conversationInfo?: GoogleCloudDialogflowV2ConversationInfo;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDialogflowV2InputConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudDialogflowV2ConversationDatasetInput
/** 
 * Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
**/
export class GoogleCloudDialogflowV2ConversationDatasetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationInfo" })
  conversationInfo?: GoogleCloudDialogflowV2ConversationInfo;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDialogflowV2InputConfig;
}
