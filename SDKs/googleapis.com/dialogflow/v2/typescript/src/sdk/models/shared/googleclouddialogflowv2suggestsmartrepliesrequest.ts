import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";


// GoogleCloudDialogflowV2SuggestSmartRepliesRequest
/** 
 * The request message for Participants.SuggestSmartReplies.
**/
export class GoogleCloudDialogflowV2SuggestSmartRepliesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=currentTextInput" })
  currentTextInput?: GoogleCloudDialogflowV2TextInput;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
