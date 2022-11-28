import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
/**
 * Finds and replaces data in cells over a range, sheet, or all sheets.
**/
export declare class FindReplaceRequest extends SpeakeasyBase {
    allSheets?: boolean;
    find?: string;
    includeFormulas?: boolean;
    matchCase?: boolean;
    matchEntireCell?: boolean;
    range?: GridRange;
    replacement?: string;
    searchByRegex?: boolean;
    sheetId?: number;
}
