import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellStyle } from "./tablecellstyle";
import { TableCellStyleSuggestionState } from "./tablecellstylesuggestionstate";


// SuggestedTableCellStyle
/** 
 * A suggested change to a TableCellStyle.
**/
export class SuggestedTableCellStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=tableCellStyle" })
  tableCellStyle?: TableCellStyle;

  @Metadata({ data: "json, name=tableCellStyleSuggestionState" })
  tableCellStyleSuggestionState?: TableCellStyleSuggestionState;
}
