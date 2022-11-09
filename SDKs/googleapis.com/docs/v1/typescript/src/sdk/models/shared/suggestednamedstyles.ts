import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamedStyles } from "./namedstyles";
import { NamedStylesSuggestionState } from "./namedstylessuggestionstate";


// SuggestedNamedStyles
/** 
 * A suggested change to the NamedStyles.
**/
export class SuggestedNamedStyles extends SpeakeasyBase {
  @Metadata({ data: "json, name=namedStyles" })
  namedStyles?: NamedStyles;

  @Metadata({ data: "json, name=namedStylesSuggestionState" })
  namedStylesSuggestionState?: NamedStylesSuggestionState;
}
