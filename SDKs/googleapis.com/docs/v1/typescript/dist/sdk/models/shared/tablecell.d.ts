import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";
import { SuggestedTableCellStyle } from "./suggestedtablecellstyle";
import { TableCellStyle } from "./tablecellstyle";
/**
 * The contents and style of a cell in a Table.
**/
export declare class TableCell extends SpeakeasyBase {
    content?: StructuralElement[];
    endIndex?: number;
    startIndex?: number;
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTableCellStyleChanges?: Map<string, SuggestedTableCellStyle>;
    tableCellStyle?: TableCellStyle;
}
