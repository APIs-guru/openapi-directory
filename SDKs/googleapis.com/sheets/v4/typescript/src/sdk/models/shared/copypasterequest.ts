import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";


export enum CopyPasteRequestPasteOrientationEnum {
    Normal = "NORMAL",
    Transpose = "TRANSPOSE"
}

export enum CopyPasteRequestPasteTypeEnum {
    PasteNormal = "PASTE_NORMAL",
    PasteValues = "PASTE_VALUES",
    PasteFormat = "PASTE_FORMAT",
    PasteNoBorders = "PASTE_NO_BORDERS",
    PasteFormula = "PASTE_FORMULA",
    PasteDataValidation = "PASTE_DATA_VALIDATION",
    PasteConditionalFormatting = "PASTE_CONDITIONAL_FORMATTING"
}


// CopyPasteRequest
/** 
 * Copies data from the source to the destination.
**/
export class CopyPasteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=pasteOrientation" })
  pasteOrientation?: CopyPasteRequestPasteOrientationEnum;

  @SpeakeasyMetadata({ data: "json, name=pasteType" })
  pasteType?: CopyPasteRequestPasteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GridRange;
}
