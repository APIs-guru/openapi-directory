import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PositionedObjectProperties } from "./positionedobjectproperties";
import { PositionedObjectPropertiesSuggestionState } from "./positionedobjectpropertiessuggestionstate";



// SuggestedPositionedObjectProperties
/** 
 * A suggested change to PositionedObjectProperties.
**/
export class SuggestedPositionedObjectProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=positionedObjectProperties" })
  positionedObjectProperties?: PositionedObjectProperties;

  @SpeakeasyMetadata({ data: "json, name=positionedObjectPropertiesSuggestionState" })
  positionedObjectPropertiesSuggestionState?: PositionedObjectPropertiesSuggestionState;
}
