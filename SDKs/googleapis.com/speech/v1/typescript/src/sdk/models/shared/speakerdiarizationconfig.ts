import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SpeakerDiarizationConfig
/** 
 * Config to enable speaker diarization.
**/
export class SpeakerDiarizationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableSpeakerDiarization" })
  enableSpeakerDiarization?: boolean;

  @Metadata({ data: "json, name=maxSpeakerCount" })
  maxSpeakerCount?: number;

  @Metadata({ data: "json, name=minSpeakerCount" })
  minSpeakerCount?: number;

  @Metadata({ data: "json, name=speakerTag" })
  speakerTag?: number;
}
