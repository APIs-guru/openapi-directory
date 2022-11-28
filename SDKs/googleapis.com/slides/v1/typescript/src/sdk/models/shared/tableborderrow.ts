import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableBorderCell } from "./tablebordercell";



// TableBorderRow
/** 
 * Contents of each border row in a table.
**/
export class TableBorderRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tableBorderCells", elemType: TableBorderCell })
  tableBorderCells?: TableBorderCell[];
}
