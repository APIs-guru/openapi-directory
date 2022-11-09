import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuggestedTableRowStyle } from "./suggestedtablerowstyle";
import { TableCell } from "./tablecell";
import { TableRowStyle } from "./tablerowstyle";


// TableRow
/** 
 * The contents and style of a row in a Table.
**/
export class TableRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @Metadata({ data: "json, name=suggestedTableRowStyleChanges", elemType: shared.SuggestedTableRowStyle })
  suggestedTableRowStyleChanges?: Map<string, SuggestedTableRowStyle>;

  @Metadata({ data: "json, name=tableCells", elemType: shared.TableCell })
  tableCells?: TableCell[];

  @Metadata({ data: "json, name=tableRowStyle" })
  tableRowStyle?: TableRowStyle;
}
