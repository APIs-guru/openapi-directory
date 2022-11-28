import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegmentInput
/** 
 * Represents one segment of audio.
**/
export class GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment
/** 
 * Represents one segment of audio.
**/
export class GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
