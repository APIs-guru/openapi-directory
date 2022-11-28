import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectSuggestionState } from "./embeddedobjectsuggestionstate";
import { PositionedObjectPositioningSuggestionState } from "./positionedobjectpositioningsuggestionstate";



// PositionedObjectPropertiesSuggestionState
/** 
 * A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class PositionedObjectPropertiesSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embeddedObjectSuggestionState" })
  embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState;

  @SpeakeasyMetadata({ data: "json, name=positioningSuggestionState" })
  positioningSuggestionState?: PositionedObjectPositioningSuggestionState;
}
