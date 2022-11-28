import { SpeakeasyBase } from "../../../internal/utils";
import { SpeechRecognitionResult } from "./speechrecognitionresult";
import { SpeechAdaptationInfo } from "./speechadaptationinfo";
/**
 * The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
**/
export declare class RecognizeResponse extends SpeakeasyBase {
    requestId?: string;
    results?: SpeechRecognitionResult[];
    speechAdaptationInfo?: SpeechAdaptationInfo;
    totalBilledTime?: string;
}
