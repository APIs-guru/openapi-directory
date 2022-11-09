import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3ResponseMessagePlayAudio
/** 
 * Specifies an audio clip to be played by the client as part of the response.
**/
export class GoogleCloudDialogflowCxV3ResponseMessagePlayAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @Metadata({ data: "json, name=audioUri" })
  audioUri?: string;
}
