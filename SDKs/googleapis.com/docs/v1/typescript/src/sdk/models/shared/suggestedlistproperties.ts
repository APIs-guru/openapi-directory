import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListProperties } from "./listproperties";
import { ListPropertiesSuggestionState } from "./listpropertiessuggestionstate";


// SuggestedListProperties
/** 
 * A suggested change to ListProperties.
**/
export class SuggestedListProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=listProperties" })
  listProperties?: ListProperties;

  @Metadata({ data: "json, name=listPropertiesSuggestionState" })
  listPropertiesSuggestionState?: ListPropertiesSuggestionState;
}
