import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";
/**
 * The request message for Participants.SuggestSmartReplies.
**/
export declare class GoogleCloudDialogflowV2SuggestSmartRepliesRequest extends SpeakeasyBase {
    contextSize?: number;
    currentTextInput?: GoogleCloudDialogflowV2TextInput;
    latestMessage?: string;
}
