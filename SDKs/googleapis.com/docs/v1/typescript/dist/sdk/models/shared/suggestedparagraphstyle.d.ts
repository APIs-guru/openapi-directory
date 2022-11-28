import { SpeakeasyBase } from "../../../internal/utils";
import { ParagraphStyle } from "./paragraphstyle";
import { ParagraphStyleSuggestionState } from "./paragraphstylesuggestionstate";
/**
 * A suggested change to a ParagraphStyle.
**/
export declare class SuggestedParagraphStyle extends SpeakeasyBase {
    paragraphStyle?: ParagraphStyle;
    paragraphStyleSuggestionState?: ParagraphStyleSuggestionState;
}
