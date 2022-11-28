import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2ConversationInfo
/** 
 * Represents metadata of a conversation.
**/
export class GoogleCloudDialogflowV2ConversationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
