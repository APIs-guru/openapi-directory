import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment
/** 
 * Represents one segment of audio.
**/
export class GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @Metadata({ data: "json, name=audio" })
  audio?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
