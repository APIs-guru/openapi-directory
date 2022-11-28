import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";
/**
 * A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class NestingLevelSuggestionState extends SpeakeasyBase {
    bulletAlignmentSuggested?: boolean;
    glyphFormatSuggested?: boolean;
    glyphSymbolSuggested?: boolean;
    glyphTypeSuggested?: boolean;
    indentFirstLineSuggested?: boolean;
    indentStartSuggested?: boolean;
    startNumberSuggested?: boolean;
    textStyleSuggestionState?: TextStyleSuggestionState;
}
