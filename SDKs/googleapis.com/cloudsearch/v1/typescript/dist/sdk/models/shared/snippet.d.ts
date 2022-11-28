import { SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";
/**
 * Snippet of the search result, which summarizes the content of the resulting page.
**/
export declare class Snippet extends SpeakeasyBase {
    matchRanges?: MatchRange[];
    snippet?: string;
}
