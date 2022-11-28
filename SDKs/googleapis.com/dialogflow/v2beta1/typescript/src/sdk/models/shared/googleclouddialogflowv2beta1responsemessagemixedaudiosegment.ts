import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment
/** 
 * Represents one segment of audio.
**/
export class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
