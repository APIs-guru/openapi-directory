import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTableRowStyle } from "./suggestedtablerowstyle";
import { TableCell } from "./tablecell";
import { TableRowStyle } from "./tablerowstyle";



// TableRow
/** 
 * The contents and style of a row in a Table.
**/
export class TableRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTableRowStyleChanges", elemType: SuggestedTableRowStyle })
  suggestedTableRowStyleChanges?: Map<string, SuggestedTableRowStyle>;

  @SpeakeasyMetadata({ data: "json, name=tableCells", elemType: TableCell })
  tableCells?: TableCell[];

  @SpeakeasyMetadata({ data: "json, name=tableRowStyle" })
  tableRowStyle?: TableRowStyle;
}
