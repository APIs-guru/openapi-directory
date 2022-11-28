import { SpeakeasyBase } from "../../../internal/utils";
import { RecognitionAudio } from "./recognitionaudio";
import { RecognitionConfigInput } from "./recognitionconfig";
import { TranscriptOutputConfig } from "./transcriptoutputconfig";
/**
 * The top-level message sent by the client for the `LongRunningRecognize` method.
**/
export declare class LongRunningRecognizeRequestInput extends SpeakeasyBase {
    audio?: RecognitionAudio;
    config?: RecognitionConfigInput;
    outputConfig?: TranscriptOutputConfig;
}
