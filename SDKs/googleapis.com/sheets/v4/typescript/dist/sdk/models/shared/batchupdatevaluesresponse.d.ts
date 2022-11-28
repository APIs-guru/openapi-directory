import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateValuesResponse } from "./updatevaluesresponse";
/**
 * The response when updating a range of values in a spreadsheet.
**/
export declare class BatchUpdateValuesResponse extends SpeakeasyBase {
    responses?: UpdateValuesResponse[];
    spreadsheetId?: string;
    totalUpdatedCells?: number;
    totalUpdatedColumns?: number;
    totalUpdatedRows?: number;
    totalUpdatedSheets?: number;
}
