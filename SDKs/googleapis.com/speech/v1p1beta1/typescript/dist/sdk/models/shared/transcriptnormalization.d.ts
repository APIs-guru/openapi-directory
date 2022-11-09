import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Entry } from "./entry";
/**
 * Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.
**/
export declare class TranscriptNormalization extends SpeakeasyBase {
    entries?: Entry[];
}
