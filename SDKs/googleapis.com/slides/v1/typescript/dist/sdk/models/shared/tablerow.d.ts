import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { TableCell } from "./tablecell";
import { TableRowProperties } from "./tablerowproperties";
/**
 * Properties and contents of each row in a table.
**/
export declare class TableRow extends SpeakeasyBase {
    rowHeight?: Dimension;
    tableCells?: TableCell[];
    tableRowProperties?: TableRowProperties;
}
