import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedStyles } from "./namedstyles";
import { NamedStylesSuggestionState } from "./namedstylessuggestionstate";



// SuggestedNamedStyles
/** 
 * A suggested change to the NamedStyles.
**/
export class SuggestedNamedStyles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namedStyles" })
  namedStyles?: NamedStyles;

  @SpeakeasyMetadata({ data: "json, name=namedStylesSuggestionState" })
  namedStylesSuggestionState?: NamedStylesSuggestionState;
}
