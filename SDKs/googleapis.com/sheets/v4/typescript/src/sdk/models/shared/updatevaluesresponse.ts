import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValueRange } from "./valuerange";



// UpdateValuesResponse
/** 
 * The response when updating a range of values in a spreadsheet.
**/
export class UpdateValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedCells" })
  updatedCells?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedColumns" })
  updatedColumns?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedData" })
  updatedData?: ValueRange;

  @SpeakeasyMetadata({ data: "json, name=updatedRange" })
  updatedRange?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedRows" })
  updatedRows?: number;
}
