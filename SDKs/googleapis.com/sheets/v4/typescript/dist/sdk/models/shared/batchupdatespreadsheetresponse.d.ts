import { SpeakeasyBase } from "../../../internal/utils";
import { Response } from "./response";
import { Spreadsheet } from "./spreadsheet";
/**
 * The reply for batch updating a spreadsheet.
**/
export declare class BatchUpdateSpreadsheetResponse extends SpeakeasyBase {
    replies?: Response[];
    spreadsheetId?: string;
    updatedSpreadsheet?: Spreadsheet;
}
