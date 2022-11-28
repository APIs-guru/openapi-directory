import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentStyle } from "./documentstyle";
import { DocumentStyleSuggestionState } from "./documentstylesuggestionstate";



// SuggestedDocumentStyle
/** 
 * A suggested change to the DocumentStyle.
**/
export class SuggestedDocumentStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentStyle" })
  documentStyle?: DocumentStyle;

  @SpeakeasyMetadata({ data: "json, name=documentStyleSuggestionState" })
  documentStyleSuggestionState?: DocumentStyleSuggestionState;
}
