import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTableRowStyle } from "./suggestedtablerowstyle";
import { TableCell } from "./tablecell";
import { TableRowStyle } from "./tablerowstyle";
/**
 * The contents and style of a row in a Table.
**/
export declare class TableRow extends SpeakeasyBase {
    endIndex?: number;
    startIndex?: number;
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTableRowStyleChanges?: Map<string, SuggestedTableRowStyle>;
    tableCells?: TableCell[];
    tableRowStyle?: TableRowStyle;
}
