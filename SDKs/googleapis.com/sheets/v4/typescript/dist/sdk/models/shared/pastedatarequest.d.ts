import { SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";
export declare enum PasteDataRequestTypeEnum {
    PasteNormal = "PASTE_NORMAL",
    PasteValues = "PASTE_VALUES",
    PasteFormat = "PASTE_FORMAT",
    PasteNoBorders = "PASTE_NO_BORDERS",
    PasteFormula = "PASTE_FORMULA",
    PasteDataValidation = "PASTE_DATA_VALIDATION",
    PasteConditionalFormatting = "PASTE_CONDITIONAL_FORMATTING"
}
/**
 * Inserts data into the spreadsheet starting at the specified coordinate.
**/
export declare class PasteDataRequest extends SpeakeasyBase {
    coordinate?: GridCoordinate;
    data?: string;
    delimiter?: string;
    html?: boolean;
    type?: PasteDataRequestTypeEnum;
}
