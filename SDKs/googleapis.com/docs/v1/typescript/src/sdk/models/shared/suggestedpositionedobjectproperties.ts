import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PositionedObjectProperties } from "./positionedobjectproperties";
import { PositionedObjectPropertiesSuggestionState } from "./positionedobjectpropertiessuggestionstate";


// SuggestedPositionedObjectProperties
/** 
 * A suggested change to PositionedObjectProperties.
**/
export class SuggestedPositionedObjectProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=positionedObjectProperties" })
  positionedObjectProperties?: PositionedObjectProperties;

  @Metadata({ data: "json, name=positionedObjectPropertiesSuggestionState" })
  positionedObjectPropertiesSuggestionState?: PositionedObjectPropertiesSuggestionState;
}
