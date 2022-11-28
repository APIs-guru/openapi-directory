import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeScores } from "./attributescores";
/**
 * The comment analysis response message.
**/
export declare class AnalyzeCommentResponse extends SpeakeasyBase {
    attributeScores?: Map<string, AttributeScores>;
    clientToken?: string;
    detectedLanguages?: string[];
    languages?: string[];
}
