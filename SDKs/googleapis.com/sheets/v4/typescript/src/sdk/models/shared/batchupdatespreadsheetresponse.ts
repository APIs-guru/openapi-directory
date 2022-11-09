import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Response } from "./response";
import { Spreadsheet } from "./spreadsheet";


// BatchUpdateSpreadsheetResponse
/** 
 * The reply for batch updating a spreadsheet.
**/
export class BatchUpdateSpreadsheetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=replies", elemType: shared.Response })
  replies?: Response[];

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @Metadata({ data: "json, name=updatedSpreadsheet" })
  updatedSpreadsheet?: Spreadsheet;
}
