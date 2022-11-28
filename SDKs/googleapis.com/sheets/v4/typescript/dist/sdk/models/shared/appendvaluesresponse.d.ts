import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateValuesResponse } from "./updatevaluesresponse";
/**
 * The response when updating a range of values in a spreadsheet.
**/
export declare class AppendValuesResponse extends SpeakeasyBase {
    spreadsheetId?: string;
    tableRange?: string;
    updates?: UpdateValuesResponse;
}
