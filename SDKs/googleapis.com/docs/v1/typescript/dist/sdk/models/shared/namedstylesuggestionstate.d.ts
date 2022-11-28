import { SpeakeasyBase } from "../../../internal/utils";
import { ParagraphStyleSuggestionState } from "./paragraphstylesuggestionstate";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";
export declare enum NamedStyleSuggestionStateNamedStyleTypeEnum {
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
 * A suggestion state of a NamedStyle message.
**/
export declare class NamedStyleSuggestionState extends SpeakeasyBase {
    namedStyleType?: NamedStyleSuggestionStateNamedStyleTypeEnum;
    paragraphStyleSuggestionState?: ParagraphStyleSuggestionState;
    textStyleSuggestionState?: TextStyleSuggestionState;
}
