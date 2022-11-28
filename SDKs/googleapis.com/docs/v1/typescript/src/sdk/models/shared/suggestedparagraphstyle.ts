import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParagraphStyle } from "./paragraphstyle";
import { ParagraphStyleSuggestionState } from "./paragraphstylesuggestionstate";



// SuggestedParagraphStyle
/** 
 * A suggested change to a ParagraphStyle.
**/
export class SuggestedParagraphStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paragraphStyle" })
  paragraphStyle?: ParagraphStyle;

  @SpeakeasyMetadata({ data: "json, name=paragraphStyleSuggestionState" })
  paragraphStyleSuggestionState?: ParagraphStyleSuggestionState;
}
