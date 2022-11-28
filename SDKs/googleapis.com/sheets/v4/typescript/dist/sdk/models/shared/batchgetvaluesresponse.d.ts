import { SpeakeasyBase } from "../../../internal/utils";
import { ValueRange } from "./valuerange";
/**
 * The response when retrieving more than one range of values in a spreadsheet.
**/
export declare class BatchGetValuesResponse extends SpeakeasyBase {
    spreadsheetId?: string;
    valueRanges?: ValueRange[];
}
