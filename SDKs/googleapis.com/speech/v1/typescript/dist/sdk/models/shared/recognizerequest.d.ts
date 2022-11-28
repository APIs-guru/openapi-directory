import { SpeakeasyBase } from "../../../internal/utils";
import { RecognitionAudio } from "./recognitionaudio";
import { RecognitionConfigInput } from "./recognitionconfig";
/**
 * The top-level message sent by the client for the `Recognize` method.
**/
export declare class RecognizeRequestInput extends SpeakeasyBase {
    audio?: RecognitionAudio;
    config?: RecognitionConfigInput;
}
