import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecognitionAudio } from "./recognitionaudio";
import { RecognitionConfig } from "./recognitionconfig";
/**
 * The top-level message sent by the client for the `Recognize` method.
**/
export declare class RecognizeRequest extends SpeakeasyBase {
    audio?: RecognitionAudio;
    config?: RecognitionConfig;
}
