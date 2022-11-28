import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { ValueRange } from "./valuerange";
/**
 * A value range that was matched by one or more data filers.
**/
export declare class MatchedValueRange extends SpeakeasyBase {
    dataFilters?: DataFilter[];
    valueRange?: ValueRange;
}
