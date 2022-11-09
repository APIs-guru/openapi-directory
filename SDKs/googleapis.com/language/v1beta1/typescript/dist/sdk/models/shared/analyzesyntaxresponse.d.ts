import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Sentence } from "./sentence";
import { Token } from "./token";
/**
 * The syntax analysis response message.
**/
export declare class AnalyzeSyntaxResponse extends SpeakeasyBase {
    language?: string;
    sentences?: Sentence[];
    tokens?: Token[];
}
