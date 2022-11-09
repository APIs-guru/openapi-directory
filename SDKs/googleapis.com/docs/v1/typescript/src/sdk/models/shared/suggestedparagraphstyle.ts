import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParagraphStyle } from "./paragraphstyle";
import { ParagraphStyleSuggestionState } from "./paragraphstylesuggestionstate";


// SuggestedParagraphStyle
/** 
 * A suggested change to a ParagraphStyle.
**/
export class SuggestedParagraphStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=paragraphStyle" })
  paragraphStyle?: ParagraphStyle;

  @Metadata({ data: "json, name=paragraphStyleSuggestionState" })
  paragraphStyleSuggestionState?: ParagraphStyleSuggestionState;
}
