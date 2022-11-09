import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SpeechRecognitionAlternative } from "./speechrecognitionalternative";
/**
 * A speech recognition result corresponding to a portion of the audio.
**/
export declare class SpeechRecognitionResult extends SpeakeasyBase {
    alternatives?: SpeechRecognitionAlternative[];
    channelTag?: number;
    languageCode?: string;
    resultEndTime?: string;
}
