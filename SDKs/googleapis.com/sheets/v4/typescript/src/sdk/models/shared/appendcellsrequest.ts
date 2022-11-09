import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RowData } from "./rowdata";


// AppendCellsRequest
/** 
 * Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
**/
export class AppendCellsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.RowData })
  rows?: RowData[];

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
