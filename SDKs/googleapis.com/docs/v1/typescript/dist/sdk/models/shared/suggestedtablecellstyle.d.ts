import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellStyle } from "./tablecellstyle";
import { TableCellStyleSuggestionState } from "./tablecellstylesuggestionstate";
/**
 * A suggested change to a TableCellStyle.
**/
export declare class SuggestedTableCellStyle extends SpeakeasyBase {
    tableCellStyle?: TableCellStyle;
    tableCellStyleSuggestionState?: TableCellStyleSuggestionState;
}
