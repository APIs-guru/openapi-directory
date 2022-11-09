import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ValueRange } from "./valuerange";


// UpdateValuesResponse
/** 
 * The response when updating a range of values in a spreadsheet.
**/
export class UpdateValuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @Metadata({ data: "json, name=updatedCells" })
  updatedCells?: number;

  @Metadata({ data: "json, name=updatedColumns" })
  updatedColumns?: number;

  @Metadata({ data: "json, name=updatedData" })
  updatedData?: ValueRange;

  @Metadata({ data: "json, name=updatedRange" })
  updatedRange?: string;

  @Metadata({ data: "json, name=updatedRows" })
  updatedRows?: number;
}
