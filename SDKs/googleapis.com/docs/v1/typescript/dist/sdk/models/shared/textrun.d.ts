import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
/**
 * A ParagraphElement that represents a run of text that all has the same styling.
**/
export declare class TextRun extends SpeakeasyBase {
    content?: string;
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;
    textStyle?: TextStyle;
}
