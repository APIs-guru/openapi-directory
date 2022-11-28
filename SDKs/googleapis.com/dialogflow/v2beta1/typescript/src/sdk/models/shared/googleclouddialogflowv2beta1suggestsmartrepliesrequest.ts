import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1TextInput } from "./googleclouddialogflowv2beta1textinput";



// GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest
/** 
 * The request message for Participants.SuggestSmartReplies.
**/
export class GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=currentTextInput" })
  currentTextInput?: GoogleCloudDialogflowV2beta1TextInput;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
