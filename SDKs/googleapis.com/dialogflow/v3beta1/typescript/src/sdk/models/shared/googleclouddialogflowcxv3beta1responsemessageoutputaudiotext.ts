import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText
/** 
 * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ssml" })
  ssml?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


// GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput
/** 
 * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssml" })
  ssml?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
