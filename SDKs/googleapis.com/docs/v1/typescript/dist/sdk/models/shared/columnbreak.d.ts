import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
/**
 * A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.
**/
export declare class ColumnBreak extends SpeakeasyBase {
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;
    textStyle?: TextStyle;
}
