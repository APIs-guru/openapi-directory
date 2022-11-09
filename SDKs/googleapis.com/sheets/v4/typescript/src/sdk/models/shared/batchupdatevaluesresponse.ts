import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateValuesResponse } from "./updatevaluesresponse";


// BatchUpdateValuesResponse
/** 
 * The response when updating a range of values in a spreadsheet.
**/
export class BatchUpdateValuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.UpdateValuesResponse })
  responses?: UpdateValuesResponse[];

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @Metadata({ data: "json, name=totalUpdatedCells" })
  totalUpdatedCells?: number;

  @Metadata({ data: "json, name=totalUpdatedColumns" })
  totalUpdatedColumns?: number;

  @Metadata({ data: "json, name=totalUpdatedRows" })
  totalUpdatedRows?: number;

  @Metadata({ data: "json, name=totalUpdatedSheets" })
  totalUpdatedSheets?: number;
}
