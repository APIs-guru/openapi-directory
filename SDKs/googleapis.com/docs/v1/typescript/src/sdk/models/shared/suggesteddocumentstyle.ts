import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentStyle } from "./documentstyle";
import { DocumentStyleSuggestionState } from "./documentstylesuggestionstate";


// SuggestedDocumentStyle
/** 
 * A suggested change to the DocumentStyle.
**/
export class SuggestedDocumentStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentStyle" })
  documentStyle?: DocumentStyle;

  @Metadata({ data: "json, name=documentStyleSuggestionState" })
  documentStyleSuggestionState?: DocumentStyleSuggestionState;
}
