import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SpeechRecognitionResult } from "./speechrecognitionresult";
/**
 * The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
**/
export declare class RecognizeResponse extends SpeakeasyBase {
    requestId?: string;
    results?: SpeechRecognitionResult[];
    totalBilledTime?: string;
}
