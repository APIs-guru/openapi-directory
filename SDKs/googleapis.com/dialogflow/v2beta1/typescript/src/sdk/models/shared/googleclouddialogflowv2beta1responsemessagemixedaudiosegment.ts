import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment
/** 
 * Represents one segment of audio.
**/
export class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @Metadata({ data: "json, name=audio" })
  audio?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
