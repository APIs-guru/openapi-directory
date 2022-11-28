import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class EmbeddedObjectBorderSuggestionState extends SpeakeasyBase {
    colorSuggested?: boolean;
    dashStyleSuggested?: boolean;
    propertyStateSuggested?: boolean;
    widthSuggested?: boolean;
}
