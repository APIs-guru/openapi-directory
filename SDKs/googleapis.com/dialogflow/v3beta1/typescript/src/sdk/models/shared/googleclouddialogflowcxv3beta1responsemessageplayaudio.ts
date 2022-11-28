import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput
/** 
 * Specifies an audio clip to be played by the client as part of the response.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioUri" })
  audioUri?: string;
}


// GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio
/** 
 * Specifies an audio clip to be played by the client as part of the response.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=audioUri" })
  audioUri?: string;
}
