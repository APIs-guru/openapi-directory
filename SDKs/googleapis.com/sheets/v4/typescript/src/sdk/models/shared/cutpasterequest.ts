import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridCoordinate } from "./gridcoordinate";
import { GridRange } from "./gridrange";

export enum CutPasteRequestPasteTypeEnum {
    PasteNormal = "PASTE_NORMAL"
,    PasteValues = "PASTE_VALUES"
,    PasteFormat = "PASTE_FORMAT"
,    PasteNoBorders = "PASTE_NO_BORDERS"
,    PasteFormula = "PASTE_FORMULA"
,    PasteDataValidation = "PASTE_DATA_VALIDATION"
,    PasteConditionalFormatting = "PASTE_CONDITIONAL_FORMATTING"
}


// CutPasteRequest
/** 
 * Moves data from the source to the destination.
**/
export class CutPasteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: GridCoordinate;

  @Metadata({ data: "json, name=pasteType" })
  pasteType?: CutPasteRequestPasteTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: GridRange;
}
