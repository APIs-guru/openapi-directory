import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RowData } from "./rowdata";



// AppendCellsRequest
/** 
 * Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
**/
export class AppendCellsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: RowData })
  rows?: RowData[];

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
