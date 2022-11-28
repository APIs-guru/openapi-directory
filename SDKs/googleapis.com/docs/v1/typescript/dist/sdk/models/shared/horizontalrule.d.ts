import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
/**
 * A ParagraphElement representing a horizontal line.
**/
export declare class HorizontalRule extends SpeakeasyBase {
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;
    textStyle?: TextStyle;
}
