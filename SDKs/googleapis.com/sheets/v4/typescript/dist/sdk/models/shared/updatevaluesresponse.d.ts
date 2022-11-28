import { SpeakeasyBase } from "../../../internal/utils";
import { ValueRange } from "./valuerange";
/**
 * The response when updating a range of values in a spreadsheet.
**/
export declare class UpdateValuesResponse extends SpeakeasyBase {
    spreadsheetId?: string;
    updatedCells?: number;
    updatedColumns?: number;
    updatedData?: ValueRange;
    updatedRange?: string;
    updatedRows?: number;
}
