import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedStyleSuggestionState } from "./namedstylesuggestionstate";



// NamedStylesSuggestionState
/** 
 * The suggestion state of a NamedStyles message.
**/
export class NamedStylesSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stylesSuggestionStates", elemType: NamedStyleSuggestionState })
  stylesSuggestionStates?: NamedStyleSuggestionState[];
}
