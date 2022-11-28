import { SpeakeasyBase } from "../../../internal/utils";
import { WordInfo } from "./wordinfo";
/**
 * Alternative hypotheses (a.k.a. n-best list).
**/
export declare class SpeechRecognitionAlternative extends SpeakeasyBase {
    confidence?: number;
    transcript?: string;
    words?: WordInfo[];
}
