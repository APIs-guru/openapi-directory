import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput
/** 
 * Represents one segment of audio.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment
/** 
 * Represents one segment of audio.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
