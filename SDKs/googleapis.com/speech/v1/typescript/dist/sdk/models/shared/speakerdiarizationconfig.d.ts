import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Config to enable speaker diarization.
**/
export declare class SpeakerDiarizationConfig extends SpeakeasyBase {
    enableSpeakerDiarization?: boolean;
    maxSpeakerCount?: number;
    minSpeakerCount?: number;
    speakerTag?: number;
}
