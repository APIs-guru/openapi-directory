import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListProperties } from "./listproperties";
import { ListPropertiesSuggestionState } from "./listpropertiessuggestionstate";



// SuggestedListProperties
/** 
 * A suggested change to ListProperties.
**/
export class SuggestedListProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listProperties" })
  listProperties?: ListProperties;

  @SpeakeasyMetadata({ data: "json, name=listPropertiesSuggestionState" })
  listPropertiesSuggestionState?: ListPropertiesSuggestionState;
}
