import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProcessingOptionsHtmlSanitizationEnum {
    HtmlSanitizationUnspecified = "HTML_SANITIZATION_UNSPECIFIED",
    HtmlSanitizationDisabled = "HTML_SANITIZATION_DISABLED",
    SimpleFormattingOnly = "SIMPLE_FORMATTING_ONLY"
}
/**
 * Options for job processing.
**/
export declare class ProcessingOptions extends SpeakeasyBase {
    disableStreetAddressResolution?: boolean;
    htmlSanitization?: ProcessingOptionsHtmlSanitizationEnum;
}
