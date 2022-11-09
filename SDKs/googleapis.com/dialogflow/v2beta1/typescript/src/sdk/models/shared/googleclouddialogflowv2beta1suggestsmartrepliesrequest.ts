import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1TextInput } from "./googleclouddialogflowv2beta1textinput";


// GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest
/** 
 * The request message for Participants.SuggestSmartReplies.
**/
export class GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=currentTextInput" })
  currentTextInput?: GoogleCloudDialogflowV2beta1TextInput;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
