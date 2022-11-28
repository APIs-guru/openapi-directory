import { SpeakeasyBase } from "../../../internal/utils";
import { NestingLevelSuggestionState } from "./nestinglevelsuggestionstate";
/**
 * A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class ListPropertiesSuggestionState extends SpeakeasyBase {
    nestingLevelsSuggestionStates?: NestingLevelSuggestionState[];
}
