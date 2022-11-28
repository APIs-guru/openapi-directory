import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectSuggestionState } from "./embeddedobjectsuggestionstate";
/**
 * A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class InlineObjectPropertiesSuggestionState extends SpeakeasyBase {
    embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState;
}
