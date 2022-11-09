import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
export declare class SpeechContext extends SpeakeasyBase {
    boost?: number;
    phrases?: string[];
}
