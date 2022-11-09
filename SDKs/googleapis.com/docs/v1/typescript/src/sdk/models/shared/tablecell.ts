import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StructuralElement } from "./structuralelement";
import { SuggestedTableCellStyle } from "./suggestedtablecellstyle";
import { TableCellStyle } from "./tablecellstyle";


// TableCell
/** 
 * The contents and style of a cell in a Table.
**/
export class TableCell extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.StructuralElement })
  content?: StructuralElement[];

  @Metadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @Metadata({ data: "json, name=suggestedTableCellStyleChanges", elemType: shared.SuggestedTableCellStyle })
  suggestedTableCellStyleChanges?: Map<string, SuggestedTableCellStyle>;

  @Metadata({ data: "json, name=tableCellStyle" })
  tableCellStyle?: TableCellStyle;
}
