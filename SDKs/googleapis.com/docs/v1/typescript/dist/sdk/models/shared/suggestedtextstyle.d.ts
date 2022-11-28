import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";
/**
 * A suggested change to a TextStyle.
**/
export declare class SuggestedTextStyle extends SpeakeasyBase {
    textStyle?: TextStyle;
    textStyleSuggestionState?: TextStyleSuggestionState;
}
