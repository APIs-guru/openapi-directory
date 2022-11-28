import { SpeakeasyBase } from "../../../internal/utils";
import { SpanScore } from "./spanscore";
import { Score } from "./score";
/**
 * This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..
**/
export declare class AttributeScores extends SpeakeasyBase {
    spanScores?: SpanScore[];
    summaryScore?: Score;
}
