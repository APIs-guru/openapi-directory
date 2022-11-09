import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CopySheetToAnotherSpreadsheetRequest
/** 
 * The request to copy a sheet across spreadsheets.
**/
export class CopySheetToAnotherSpreadsheetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationSpreadsheetId" })
  destinationSpreadsheetId?: string;
}
