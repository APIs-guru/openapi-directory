import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateValuesByDataFilterResponse } from "./updatevaluesbydatafilterresponse";
/**
 * The response when updating a range of values in a spreadsheet.
**/
export declare class BatchUpdateValuesByDataFilterResponse extends SpeakeasyBase {
    responses?: UpdateValuesByDataFilterResponse[];
    spreadsheetId?: string;
    totalUpdatedCells?: number;
    totalUpdatedColumns?: number;
    totalUpdatedRows?: number;
    totalUpdatedSheets?: number;
}
