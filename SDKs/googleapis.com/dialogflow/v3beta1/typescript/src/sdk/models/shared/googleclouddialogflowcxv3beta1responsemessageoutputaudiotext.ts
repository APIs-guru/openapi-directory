import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText
/** 
 * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @Metadata({ data: "json, name=ssml" })
  ssml?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
