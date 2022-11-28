import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class TextStyleSuggestionState extends SpeakeasyBase {
    backgroundColorSuggested?: boolean;
    baselineOffsetSuggested?: boolean;
    boldSuggested?: boolean;
    fontSizeSuggested?: boolean;
    foregroundColorSuggested?: boolean;
    italicSuggested?: boolean;
    linkSuggested?: boolean;
    smallCapsSuggested?: boolean;
    strikethroughSuggested?: boolean;
    underlineSuggested?: boolean;
    weightedFontFamilySuggested?: boolean;
}
