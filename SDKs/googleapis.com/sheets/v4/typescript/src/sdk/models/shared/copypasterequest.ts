import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";
import { GridRange } from "./gridrange";

export enum CopyPasteRequestPasteOrientationEnum {
    Normal = "NORMAL"
,    Transpose = "TRANSPOSE"
}

export enum CopyPasteRequestPasteTypeEnum {
    PasteNormal = "PASTE_NORMAL"
,    PasteValues = "PASTE_VALUES"
,    PasteFormat = "PASTE_FORMAT"
,    PasteNoBorders = "PASTE_NO_BORDERS"
,    PasteFormula = "PASTE_FORMULA"
,    PasteDataValidation = "PASTE_DATA_VALIDATION"
,    PasteConditionalFormatting = "PASTE_CONDITIONAL_FORMATTING"
}


// CopyPasteRequest
/** 
 * Copies data from the source to the destination.
**/
export class CopyPasteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: GridRange;

  @Metadata({ data: "json, name=pasteOrientation" })
  pasteOrientation?: CopyPasteRequestPasteOrientationEnum;

  @Metadata({ data: "json, name=pasteType" })
  pasteType?: CopyPasteRequestPasteTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: GridRange;
}
