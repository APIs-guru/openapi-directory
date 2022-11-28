import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1beta2SpeechContext } from "./googlecloudvideointelligencev1beta2speechcontext";
/**
 * Config for SPEECH_TRANSCRIPTION.
**/
export declare class GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig extends SpeakeasyBase {
    audioTracks?: number[];
    diarizationSpeakerCount?: number;
    enableAutomaticPunctuation?: boolean;
    enableSpeakerDiarization?: boolean;
    enableWordConfidence?: boolean;
    filterProfanity?: boolean;
    languageCode?: string;
    maxAlternatives?: number;
    speechContexts?: GoogleCloudVideointelligenceV1beta2SpeechContext[];
}
