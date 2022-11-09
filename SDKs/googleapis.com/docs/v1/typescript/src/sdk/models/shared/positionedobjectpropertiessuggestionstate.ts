import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObjectSuggestionState } from "./embeddedobjectsuggestionstate";
import { PositionedObjectPositioningSuggestionState } from "./positionedobjectpositioningsuggestionstate";


// PositionedObjectPropertiesSuggestionState
/** 
 * A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class PositionedObjectPropertiesSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=embeddedObjectSuggestionState" })
  embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState;

  @Metadata({ data: "json, name=positioningSuggestionState" })
  positioningSuggestionState?: PositionedObjectPositioningSuggestionState;
}
