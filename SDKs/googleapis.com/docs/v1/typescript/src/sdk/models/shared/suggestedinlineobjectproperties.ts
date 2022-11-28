import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InlineObjectProperties } from "./inlineobjectproperties";
import { InlineObjectPropertiesSuggestionState } from "./inlineobjectpropertiessuggestionstate";



// SuggestedInlineObjectProperties
/** 
 * A suggested change to InlineObjectProperties.
**/
export class SuggestedInlineObjectProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inlineObjectProperties" })
  inlineObjectProperties?: InlineObjectProperties;

  @SpeakeasyMetadata({ data: "json, name=inlineObjectPropertiesSuggestionState" })
  inlineObjectPropertiesSuggestionState?: InlineObjectPropertiesSuggestionState;
}
