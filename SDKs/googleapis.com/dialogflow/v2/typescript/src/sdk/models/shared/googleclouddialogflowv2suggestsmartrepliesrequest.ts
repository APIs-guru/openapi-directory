import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";



// GoogleCloudDialogflowV2SuggestSmartRepliesRequest
/** 
 * The request message for Participants.SuggestSmartReplies.
**/
export class GoogleCloudDialogflowV2SuggestSmartRepliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=currentTextInput" })
  currentTextInput?: GoogleCloudDialogflowV2TextInput;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
