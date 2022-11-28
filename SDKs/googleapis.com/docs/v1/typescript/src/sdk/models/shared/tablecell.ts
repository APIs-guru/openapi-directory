import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";
import { SuggestedTableCellStyle } from "./suggestedtablecellstyle";
import { TableCellStyle } from "./tablecellstyle";



// TableCell
/** 
 * The contents and style of a cell in a Table.
**/
export class TableCell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElement })
  content?: StructuralElement[];

  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTableCellStyleChanges", elemType: SuggestedTableCellStyle })
  suggestedTableCellStyleChanges?: Map<string, SuggestedTableCellStyle>;

  @SpeakeasyMetadata({ data: "json, name=tableCellStyle" })
  tableCellStyle?: TableCellStyle;
}
