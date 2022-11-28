import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response when clearing a range of values selected with DataFilters in a spreadsheet.
**/
export declare class BatchClearValuesByDataFilterResponse extends SpeakeasyBase {
    clearedRanges?: string[];
    spreadsheetId?: string;
}
