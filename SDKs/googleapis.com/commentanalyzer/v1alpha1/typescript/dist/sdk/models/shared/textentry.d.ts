import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TextEntryTypeEnum {
    TextTypeUnspecified = "TEXT_TYPE_UNSPECIFIED",
    PlainText = "PLAIN_TEXT",
    Html = "HTML"
}
/**
 * Represents a body of text.
**/
export declare class TextEntry extends SpeakeasyBase {
    text?: string;
    type?: TextEntryTypeEnum;
}
