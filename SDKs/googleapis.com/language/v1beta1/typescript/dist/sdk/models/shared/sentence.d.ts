import { SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { TextSpan } from "./textspan";
/**
 * Represents a sentence in the input document.
**/
export declare class Sentence extends SpeakeasyBase {
    sentiment?: Sentiment;
    text?: TextSpan;
}
