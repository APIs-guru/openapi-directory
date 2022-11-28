import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum {
    CommonCharsToIgnoreUnspecified = "COMMON_CHARS_TO_IGNORE_UNSPECIFIED",
    Numeric = "NUMERIC",
    AlphaUpperCase = "ALPHA_UPPER_CASE",
    AlphaLowerCase = "ALPHA_LOWER_CASE",
    Punctuation = "PUNCTUATION",
    Whitespace = "WHITESPACE"
}
/**
 * Characters to skip when doing deidentification of a value. These will be left alone and skipped.
**/
export declare class GooglePrivacyDlpV2CharsToIgnore extends SpeakeasyBase {
    charactersToSkip?: string;
    commonCharactersToIgnore?: GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum;
}
