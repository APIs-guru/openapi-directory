import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmbeddedObjectBorderSuggestionState
/** 
 * A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class EmbeddedObjectBorderSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=colorSuggested" })
  colorSuggested?: boolean;

  @Metadata({ data: "json, name=dashStyleSuggested" })
  dashStyleSuggested?: boolean;

  @Metadata({ data: "json, name=propertyStateSuggested" })
  propertyStateSuggested?: boolean;

  @Metadata({ data: "json, name=widthSuggested" })
  widthSuggested?: boolean;
}
