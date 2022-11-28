import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRowStyle } from "./tablerowstyle";
import { TableRowStyleSuggestionState } from "./tablerowstylesuggestionstate";



// SuggestedTableRowStyle
/** 
 * A suggested change to a TableRowStyle.
**/
export class SuggestedTableRowStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tableRowStyle" })
  tableRowStyle?: TableRowStyle;

  @SpeakeasyMetadata({ data: "json, name=tableRowStyleSuggestionState" })
  tableRowStyleSuggestionState?: TableRowStyleSuggestionState;
}
