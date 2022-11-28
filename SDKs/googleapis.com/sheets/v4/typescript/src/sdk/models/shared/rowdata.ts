import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CellData } from "./celldata";



// RowData
/** 
 * Data about each cell in a row.
**/
export class RowData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: CellData })
  values?: CellData[];
}
