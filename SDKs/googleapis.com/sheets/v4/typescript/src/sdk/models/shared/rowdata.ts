import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CellData } from "./celldata";


// RowData
/** 
 * Data about each cell in a row.
**/
export class RowData extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.CellData })
  values?: CellData[];
}
