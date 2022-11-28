import { SpeakeasyBase } from "../../../internal/utils";
import { MatchedValueRange } from "./matchedvaluerange";
/**
 * The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
**/
export declare class BatchGetValuesByDataFilterResponse extends SpeakeasyBase {
    spreadsheetId?: string;
    valueRanges?: MatchedValueRange[];
}
