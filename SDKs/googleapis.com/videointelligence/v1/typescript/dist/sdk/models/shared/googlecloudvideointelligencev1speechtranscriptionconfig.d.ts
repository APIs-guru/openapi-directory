import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1SpeechContext } from "./googlecloudvideointelligencev1speechcontext";
/**
 * Config for SPEECH_TRANSCRIPTION.
**/
export declare class GoogleCloudVideointelligenceV1SpeechTranscriptionConfig extends SpeakeasyBase {
    audioTracks?: number[];
    diarizationSpeakerCount?: number;
    enableAutomaticPunctuation?: boolean;
    enableSpeakerDiarization?: boolean;
    enableWordConfidence?: boolean;
    filterProfanity?: boolean;
    languageCode?: string;
    maxAlternatives?: number;
    speechContexts?: GoogleCloudVideointelligenceV1SpeechContext[];
}
