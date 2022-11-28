import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";



// SuggestedTextStyle
/** 
 * A suggested change to a TextStyle.
**/
export class SuggestedTextStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;

  @SpeakeasyMetadata({ data: "json, name=textStyleSuggestionState" })
  textStyleSuggestionState?: TextStyleSuggestionState;
}
