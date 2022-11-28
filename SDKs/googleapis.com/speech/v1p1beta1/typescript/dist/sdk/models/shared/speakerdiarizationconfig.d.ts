import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config to enable speaker diarization.
**/
export declare class SpeakerDiarizationConfigInput extends SpeakeasyBase {
    enableSpeakerDiarization?: boolean;
    maxSpeakerCount?: number;
    minSpeakerCount?: number;
}
