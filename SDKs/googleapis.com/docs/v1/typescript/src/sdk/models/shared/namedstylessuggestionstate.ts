import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamedStyleSuggestionState } from "./namedstylesuggestionstate";


// NamedStylesSuggestionState
/** 
 * The suggestion state of a NamedStyles message.
**/
export class NamedStylesSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=stylesSuggestionStates", elemType: shared.NamedStyleSuggestionState })
  stylesSuggestionStates?: NamedStyleSuggestionState[];
}
