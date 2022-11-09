import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableBorderCell } from "./tablebordercell";


// TableBorderRow
/** 
 * Contents of each border row in a table.
**/
export class TableBorderRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=tableBorderCells", elemType: shared.TableBorderCell })
  tableBorderCells?: TableBorderCell[];
}
