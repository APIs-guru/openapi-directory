package shared

type GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum string

const (
	GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnumCommonCharsToIgnoreUnspecified GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum = "COMMON_CHARS_TO_IGNORE_UNSPECIFIED"
	GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnumNumeric                        GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum = "NUMERIC"
	GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnumAlphaUpperCase                 GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum = "ALPHA_UPPER_CASE"
	GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnumAlphaLowerCase                 GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum = "ALPHA_LOWER_CASE"
	GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnumPunctuation                    GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum = "PUNCTUATION"
	GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnumWhitespace                     GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum = "WHITESPACE"
)

type GooglePrivacyDlpV2CharsToIgnore struct {
	CharactersToSkip         *string                                                      `json:"charactersToSkip,omitempty"`
	CommonCharactersToIgnore *GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum `json:"commonCharactersToIgnore,omitempty"`
}
