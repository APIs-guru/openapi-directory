import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellStyle } from "./tablecellstyle";
import { TableCellStyleSuggestionState } from "./tablecellstylesuggestionstate";



// SuggestedTableCellStyle
/** 
 * A suggested change to a TableCellStyle.
**/
export class SuggestedTableCellStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tableCellStyle" })
  tableCellStyle?: TableCellStyle;

  @SpeakeasyMetadata({ data: "json, name=tableCellStyleSuggestionState" })
  tableCellStyleSuggestionState?: TableCellStyleSuggestionState;
}
