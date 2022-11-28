import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { TableCell } from "./tablecell";
import { TableRowProperties } from "./tablerowproperties";



// TableRow
/** 
 * Properties and contents of each row in a table.
**/
export class TableRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rowHeight" })
  rowHeight?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=tableCells", elemType: TableCell })
  tableCells?: TableCell[];

  @SpeakeasyMetadata({ data: "json, name=tableRowProperties" })
  tableRowProperties?: TableRowProperties;
}
