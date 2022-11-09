import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableRowStyle } from "./tablerowstyle";
import { TableRowStyleSuggestionState } from "./tablerowstylesuggestionstate";


// SuggestedTableRowStyle
/** 
 * A suggested change to a TableRowStyle.
**/
export class SuggestedTableRowStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=tableRowStyle" })
  tableRowStyle?: TableRowStyle;

  @Metadata({ data: "json, name=tableRowStyleSuggestionState" })
  tableRowStyleSuggestionState?: TableRowStyleSuggestionState;
}
