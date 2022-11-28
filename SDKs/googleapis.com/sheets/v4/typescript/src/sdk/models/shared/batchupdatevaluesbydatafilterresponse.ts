import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateValuesByDataFilterResponse } from "./updatevaluesbydatafilterresponse";



// BatchUpdateValuesByDataFilterResponse
/** 
 * The response when updating a range of values in a spreadsheet.
**/
export class BatchUpdateValuesByDataFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: UpdateValuesByDataFilterResponse })
  responses?: UpdateValuesByDataFilterResponse[];

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
