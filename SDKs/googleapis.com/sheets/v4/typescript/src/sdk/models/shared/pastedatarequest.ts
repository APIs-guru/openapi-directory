import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";


export enum PasteDataRequestTypeEnum {
    PasteNormal = "PASTE_NORMAL",
    PasteValues = "PASTE_VALUES",
    PasteFormat = "PASTE_FORMAT",
    PasteNoBorders = "PASTE_NO_BORDERS",
    PasteFormula = "PASTE_FORMULA",
    PasteDataValidation = "PASTE_DATA_VALIDATION",
    PasteConditionalFormatting = "PASTE_CONDITIONAL_FORMATTING"
}


// PasteDataRequest
/** 
 * Inserts data into the spreadsheet starting at the specified coordinate.
**/
export class PasteDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coordinate" })
  coordinate?: GridCoordinate;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PasteDataRequestTypeEnum;
}
