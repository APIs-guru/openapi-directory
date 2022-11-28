import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3ResponseMessagePlayAudio
/** 
 * Specifies an audio clip to be played by the client as part of the response.
**/
export class GoogleCloudDialogflowCxV3ResponseMessagePlayAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=audioUri" })
  audioUri?: string;
}


// GoogleCloudDialogflowCxV3ResponseMessagePlayAudioInput
/** 
 * Specifies an audio clip to be played by the client as part of the response.
**/
export class GoogleCloudDialogflowCxV3ResponseMessagePlayAudioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioUri" })
  audioUri?: string;
}
