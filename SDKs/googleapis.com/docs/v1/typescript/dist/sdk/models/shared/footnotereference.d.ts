import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
/**
 * A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
**/
export declare class FootnoteReference extends SpeakeasyBase {
    footnoteId?: string;
    footnoteNumber?: string;
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;
    textStyle?: TextStyle;
}
