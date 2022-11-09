import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateValuesByDataFilterResponse } from "./updatevaluesbydatafilterresponse";


// BatchUpdateValuesByDataFilterResponse
/** 
 * The response when updating a range of values in a spreadsheet.
**/
export class BatchUpdateValuesByDataFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.UpdateValuesByDataFilterResponse })
  responses?: UpdateValuesByDataFilterResponse[];

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
