import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Duplicates the contents of a sheet.
**/
export declare class DuplicateSheetRequest extends SpeakeasyBase {
    insertSheetIndex?: number;
    newSheetId?: number;
    newSheetName?: string;
    sourceSheetId?: number;
}
