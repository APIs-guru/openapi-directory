import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextStyle } from "./textstyle";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";


// SuggestedTextStyle
/** 
 * A suggested change to a TextStyle.
**/
export class SuggestedTextStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;

  @Metadata({ data: "json, name=textStyleSuggestionState" })
  textStyleSuggestionState?: TextStyleSuggestionState;
}
