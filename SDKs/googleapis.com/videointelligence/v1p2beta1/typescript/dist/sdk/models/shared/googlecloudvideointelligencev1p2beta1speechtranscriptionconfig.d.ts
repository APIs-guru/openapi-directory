import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1p2beta1SpeechContext } from "./googlecloudvideointelligencev1p2beta1speechcontext";
/**
 * Config for SPEECH_TRANSCRIPTION.
**/
export declare class GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig extends SpeakeasyBase {
    audioTracks?: number[];
    diarizationSpeakerCount?: number;
    enableAutomaticPunctuation?: boolean;
    enableSpeakerDiarization?: boolean;
    enableWordConfidence?: boolean;
    filterProfanity?: boolean;
    languageCode?: string;
    maxAlternatives?: number;
    speechContexts?: GoogleCloudVideointelligenceV1p2beta1SpeechContext[];
}
