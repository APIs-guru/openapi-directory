import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateValuesResponse } from "./updatevaluesresponse";



// BatchUpdateValuesResponse
/** 
 * The response when updating a range of values in a spreadsheet.
**/
export class BatchUpdateValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: UpdateValuesResponse })
  responses?: UpdateValuesResponse[];

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @SpeakeasyMetadata({ data: "json, name=totalUpdatedCells" })
  totalUpdatedCells?: number;

  @SpeakeasyMetadata({ data: "json, name=totalUpdatedColumns" })
  totalUpdatedColumns?: number;

  @SpeakeasyMetadata({ data: "json, name=totalUpdatedRows" })
  totalUpdatedRows?: number;

  @SpeakeasyMetadata({ data: "json, name=totalUpdatedSheets" })
  totalUpdatedSheets?: number;
}
