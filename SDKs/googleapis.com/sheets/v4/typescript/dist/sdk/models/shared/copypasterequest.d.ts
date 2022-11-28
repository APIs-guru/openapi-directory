import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
export declare enum CopyPasteRequestPasteOrientationEnum {
    Normal = "NORMAL",
    Transpose = "TRANSPOSE"
}
export declare enum CopyPasteRequestPasteTypeEnum {
    PasteNormal = "PASTE_NORMAL",
    PasteValues = "PASTE_VALUES",
    PasteFormat = "PASTE_FORMAT",
    PasteNoBorders = "PASTE_NO_BORDERS",
    PasteFormula = "PASTE_FORMULA",
    PasteDataValidation = "PASTE_DATA_VALIDATION",
    PasteConditionalFormatting = "PASTE_CONDITIONAL_FORMATTING"
}
/**
 * Copies data from the source to the destination.
**/
export declare class CopyPasteRequest extends SpeakeasyBase {
    destination?: GridRange;
    pasteOrientation?: CopyPasteRequestPasteOrientationEnum;
    pasteType?: CopyPasteRequestPasteTypeEnum;
    source?: GridRange;
}
