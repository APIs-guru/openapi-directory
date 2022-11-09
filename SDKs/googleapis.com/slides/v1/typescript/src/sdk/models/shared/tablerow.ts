import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { TableCell } from "./tablecell";
import { TableRowProperties } from "./tablerowproperties";


// TableRow
/** 
 * Properties and contents of each row in a table.
**/
export class TableRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=rowHeight" })
  rowHeight?: Dimension;

  @Metadata({ data: "json, name=tableCells", elemType: shared.TableCell })
  tableCells?: TableCell[];

  @Metadata({ data: "json, name=tableRowProperties" })
  tableRowProperties?: TableRowProperties;
}
