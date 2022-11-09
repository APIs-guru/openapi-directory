import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Phrase } from "./phrase";
/**
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
export declare class PhraseSet extends SpeakeasyBase {
    boost?: number;
    name?: string;
    phrases?: Phrase[];
}
