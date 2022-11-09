import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecognitionAudio } from "./recognitionaudio";
import { RecognitionConfig } from "./recognitionconfig";
import { TranscriptOutputConfig } from "./transcriptoutputconfig";
/**
 * The top-level message sent by the client for the `LongRunningRecognize` method.
**/
export declare class LongRunningRecognizeRequest extends SpeakeasyBase {
    audio?: RecognitionAudio;
    config?: RecognitionConfig;
    outputConfig?: TranscriptOutputConfig;
}
