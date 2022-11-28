import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
/**
 * The request for retrieving a Spreadsheet.
**/
export declare class GetSpreadsheetByDataFilterRequest extends SpeakeasyBase {
    dataFilters?: DataFilter[];
    includeGridData?: boolean;
}
