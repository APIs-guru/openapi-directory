import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum {
    CommonCharsToIgnoreUnspecified = "COMMON_CHARS_TO_IGNORE_UNSPECIFIED"
,    Numeric = "NUMERIC"
,    AlphaUpperCase = "ALPHA_UPPER_CASE"
,    AlphaLowerCase = "ALPHA_LOWER_CASE"
,    Punctuation = "PUNCTUATION"
,    Whitespace = "WHITESPACE"
}


// GooglePrivacyDlpV2CharsToIgnore
/** 
 * Characters to skip when doing deidentification of a value. These will be left alone and skipped.
**/
export class GooglePrivacyDlpV2CharsToIgnore extends SpeakeasyBase {
  @Metadata({ data: "json, name=charactersToSkip" })
  charactersToSkip?: string;

  @Metadata({ data: "json, name=commonCharactersToIgnore" })
  commonCharactersToIgnore?: GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum;
}
