import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response when clearing a range of values in a spreadsheet.
**/
export declare class BatchClearValuesResponse extends SpeakeasyBase {
    clearedRanges?: string[];
    spreadsheetId?: string;
}
