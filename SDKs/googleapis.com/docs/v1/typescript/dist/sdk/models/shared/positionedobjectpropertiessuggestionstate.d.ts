import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectSuggestionState } from "./embeddedobjectsuggestionstate";
import { PositionedObjectPositioningSuggestionState } from "./positionedobjectpositioningsuggestionstate";
/**
 * A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class PositionedObjectPropertiesSuggestionState extends SpeakeasyBase {
    embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState;
    positioningSuggestionState?: PositionedObjectPositioningSuggestionState;
}
