import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InlineObjectProperties } from "./inlineobjectproperties";
import { InlineObjectPropertiesSuggestionState } from "./inlineobjectpropertiessuggestionstate";


// SuggestedInlineObjectProperties
/** 
 * A suggested change to InlineObjectProperties.
**/
export class SuggestedInlineObjectProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=inlineObjectProperties" })
  inlineObjectProperties?: InlineObjectProperties;

  @Metadata({ data: "json, name=inlineObjectPropertiesSuggestionState" })
  inlineObjectPropertiesSuggestionState?: InlineObjectPropertiesSuggestionState;
}
