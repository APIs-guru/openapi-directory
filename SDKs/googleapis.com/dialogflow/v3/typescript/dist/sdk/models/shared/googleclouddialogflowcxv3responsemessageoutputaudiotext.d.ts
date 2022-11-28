import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
**/
export declare class GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText extends SpeakeasyBase {
    allowPlaybackInterruption?: boolean;
    ssml?: string;
    text?: string;
}
/**
 * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
**/
export declare class GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput extends SpeakeasyBase {
    ssml?: string;
    text?: string;
}
