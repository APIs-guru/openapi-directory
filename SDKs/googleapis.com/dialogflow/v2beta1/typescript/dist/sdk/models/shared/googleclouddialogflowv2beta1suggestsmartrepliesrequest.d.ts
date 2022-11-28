import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1TextInput } from "./googleclouddialogflowv2beta1textinput";
/**
 * The request message for Participants.SuggestSmartReplies.
**/
export declare class GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest extends SpeakeasyBase {
    contextSize?: number;
    currentTextInput?: GoogleCloudDialogflowV2beta1TextInput;
    latestMessage?: string;
}
