import { SpeakeasyBase } from "../../../internal/utils";
import { Score } from "./score";
/**
 * This is a single score for a given span of text.
**/
export declare class SpanScore extends SpeakeasyBase {
    begin?: number;
    end?: number;
    score?: Score;
}
