import { SpeakeasyBase } from "../../../internal/utils";
import { ShadingSuggestionState } from "./shadingsuggestionstate";
/**
 * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class ParagraphStyleSuggestionState extends SpeakeasyBase {
    alignmentSuggested?: boolean;
    avoidWidowAndOrphanSuggested?: boolean;
    borderBetweenSuggested?: boolean;
    borderBottomSuggested?: boolean;
    borderLeftSuggested?: boolean;
    borderRightSuggested?: boolean;
    borderTopSuggested?: boolean;
    directionSuggested?: boolean;
    headingIdSuggested?: boolean;
    indentEndSuggested?: boolean;
    indentFirstLineSuggested?: boolean;
    indentStartSuggested?: boolean;
    keepLinesTogetherSuggested?: boolean;
    keepWithNextSuggested?: boolean;
    lineSpacingSuggested?: boolean;
    namedStyleTypeSuggested?: boolean;
    pageBreakBeforeSuggested?: boolean;
    shadingSuggestionState?: ShadingSuggestionState;
    spaceAboveSuggested?: boolean;
    spaceBelowSuggested?: boolean;
    spacingModeSuggested?: boolean;
}
