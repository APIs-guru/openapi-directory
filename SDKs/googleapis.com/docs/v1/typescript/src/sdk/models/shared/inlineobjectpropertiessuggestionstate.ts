import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObjectSuggestionState } from "./embeddedobjectsuggestionstate";


// InlineObjectPropertiesSuggestionState
/** 
 * A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class InlineObjectPropertiesSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=embeddedObjectSuggestionState" })
  embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState;
}
