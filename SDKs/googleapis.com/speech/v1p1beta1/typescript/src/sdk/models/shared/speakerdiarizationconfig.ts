import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpeakerDiarizationConfigInput
/** 
 * Config to enable speaker diarization.
**/
export class SpeakerDiarizationConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableSpeakerDiarization" })
  enableSpeakerDiarization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxSpeakerCount" })
  maxSpeakerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minSpeakerCount" })
  minSpeakerCount?: number;
}
