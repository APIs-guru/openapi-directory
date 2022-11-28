import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Response } from "./response";
import { Spreadsheet } from "./spreadsheet";



// BatchUpdateSpreadsheetResponse
/** 
 * The reply for batch updating a spreadsheet.
**/
export class BatchUpdateSpreadsheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replies", elemType: Response })
  replies?: Response[];

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedSpreadsheet" })
  updatedSpreadsheet?: Spreadsheet;
}
