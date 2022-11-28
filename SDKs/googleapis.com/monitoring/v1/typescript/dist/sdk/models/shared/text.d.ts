import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TextFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Markdown = "MARKDOWN",
    Raw = "RAW"
}
/**
 * A widget that displays textual content.
**/
export declare class Text extends SpeakeasyBase {
    content?: string;
    format?: TextFormatEnum;
}
