import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestingLevelSuggestionState } from "./nestinglevelsuggestionstate";



// ListPropertiesSuggestionState
/** 
 * A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class ListPropertiesSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nestingLevelsSuggestionStates", elemType: NestingLevelSuggestionState })
  nestingLevelsSuggestionStates?: NestingLevelSuggestionState[];
}
