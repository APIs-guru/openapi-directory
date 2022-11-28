import { SpeakeasyBase } from "../../../internal/utils";
import { Request } from "./request";
/**
 * The request for updating any aspect of a spreadsheet.
**/
export declare class BatchUpdateSpreadsheetRequest extends SpeakeasyBase {
    includeSpreadsheetInResponse?: boolean;
    requests?: Request[];
    responseIncludeGridData?: boolean;
    responseRanges?: string[];
}
