import { SpeakeasyBase } from "../../../internal/utils";
import { ParagraphStyle } from "./paragraphstyle";
import { TextStyle } from "./textstyle";
export declare enum NamedStyleNamedStyleTypeEnum {
    NamedStyleTypeUnspecified = "NAMED_STYLE_TYPE_UNSPECIFIED",
    NormalText = "NORMAL_TEXT",
    Title = "TITLE",
    Subtitle = "SUBTITLE",
    Heading1 = "HEADING_1",
    Heading2 = "HEADING_2",
    Heading3 = "HEADING_3",
    Heading4 = "HEADING_4",
    Heading5 = "HEADING_5",
    Heading6 = "HEADING_6"
}
/**
 * A named style. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from this named style when they have the same named style type.
**/
export declare class NamedStyle extends SpeakeasyBase {
    namedStyleType?: NamedStyleNamedStyleTypeEnum;
    paragraphStyle?: ParagraphStyle;
    textStyle?: TextStyle;
}
