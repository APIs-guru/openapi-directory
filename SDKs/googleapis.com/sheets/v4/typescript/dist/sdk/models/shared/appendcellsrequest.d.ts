import { SpeakeasyBase } from "../../../internal/utils";
import { RowData } from "./rowdata";
/**
 * Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
**/
export declare class AppendCellsRequest extends SpeakeasyBase {
    fields?: string;
    rows?: RowData[];
    sheetId?: number;
}
