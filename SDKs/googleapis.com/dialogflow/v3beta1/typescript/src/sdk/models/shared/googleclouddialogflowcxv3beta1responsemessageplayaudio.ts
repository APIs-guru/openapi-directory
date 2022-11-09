import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio
/** 
 * Specifies an audio clip to be played by the client as part of the response.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @Metadata({ data: "json, name=audioUri" })
  audioUri?: string;
}
