import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText
/** 
 * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
**/
export class GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ssml" })
  ssml?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


// GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput
/** 
 * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
**/
export class GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssml" })
  ssml?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
