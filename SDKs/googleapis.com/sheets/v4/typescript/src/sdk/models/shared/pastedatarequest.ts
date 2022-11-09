import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridCoordinate } from "./gridcoordinate";

export enum PasteDataRequestTypeEnum {
    PasteNormal = "PASTE_NORMAL"
,    PasteValues = "PASTE_VALUES"
,    PasteFormat = "PASTE_FORMAT"
,    PasteNoBorders = "PASTE_NO_BORDERS"
,    PasteFormula = "PASTE_FORMULA"
,    PasteDataValidation = "PASTE_DATA_VALIDATION"
,    PasteConditionalFormatting = "PASTE_CONDITIONAL_FORMATTING"
}


// PasteDataRequest
/** 
 * Inserts data into the spreadsheet starting at the specified coordinate.
**/
export class PasteDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=coordinate" })
  coordinate?: GridCoordinate;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @Metadata({ data: "json, name=html" })
  html?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: PasteDataRequestTypeEnum;
}
