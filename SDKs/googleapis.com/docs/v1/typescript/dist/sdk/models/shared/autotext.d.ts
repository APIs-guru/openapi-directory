import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
export declare enum AutoTextTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PageNumber = "PAGE_NUMBER",
    PageCount = "PAGE_COUNT"
}
/**
 * A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.
**/
export declare class AutoText extends SpeakeasyBase {
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;
    textStyle?: TextStyle;
    type?: AutoTextTypeEnum;
}
