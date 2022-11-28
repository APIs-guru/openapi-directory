import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CopySheetToAnotherSpreadsheetRequest
/** 
 * The request to copy a sheet across spreadsheets.
**/
export class CopySheetToAnotherSpreadsheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationSpreadsheetId" })
  destinationSpreadsheetId?: string;
}
