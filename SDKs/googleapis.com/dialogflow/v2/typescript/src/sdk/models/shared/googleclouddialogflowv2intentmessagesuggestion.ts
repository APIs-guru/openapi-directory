import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentMessageSuggestion
/** 
 * The suggestion chip message that the user can tap to quickly post a reply to the conversation.
**/
export class GoogleCloudDialogflowV2IntentMessageSuggestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
