import { SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";
import { GridRange } from "./gridrange";
export declare enum CutPasteRequestPasteTypeEnum {
    PasteNormal = "PASTE_NORMAL",
    PasteValues = "PASTE_VALUES",
    PasteFormat = "PASTE_FORMAT",
    PasteNoBorders = "PASTE_NO_BORDERS",
    PasteFormula = "PASTE_FORMULA",
    PasteDataValidation = "PASTE_DATA_VALIDATION",
    PasteConditionalFormatting = "PASTE_CONDITIONAL_FORMATTING"
}
/**
 * Moves data from the source to the destination.
**/
export declare class CutPasteRequest extends SpeakeasyBase {
    destination?: GridCoordinate;
    pasteType?: CutPasteRequestPasteTypeEnum;
    source?: GridRange;
}
