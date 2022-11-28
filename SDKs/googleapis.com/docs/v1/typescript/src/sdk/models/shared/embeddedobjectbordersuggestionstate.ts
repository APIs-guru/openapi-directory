import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmbeddedObjectBorderSuggestionState
/** 
 * A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class EmbeddedObjectBorderSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorSuggested" })
  colorSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dashStyleSuggested" })
  dashStyleSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=propertyStateSuggested" })
  propertyStateSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=widthSuggested" })
  widthSuggested?: boolean;
}
