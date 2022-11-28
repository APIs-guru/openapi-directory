package shared

type GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum string

const (
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumFfxCommonNativeAlphabetUnspecified GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED"
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumNumeric                            GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "NUMERIC"
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumHexadecimal                        GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "HEXADECIMAL"
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumUpperCaseAlphaNumeric              GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "UPPER_CASE_ALPHA_NUMERIC"
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumAlphaNumeric                       GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "ALPHA_NUMERIC"
)

// GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig
// Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.
type GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig struct {
	CommonAlphabet    *GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum `json:"commonAlphabet,omitempty"`
	Context           *GooglePrivacyDlpV2FieldID                                     `json:"context,omitempty"`
	CryptoKey         *GooglePrivacyDlpV2CryptoKey                                   `json:"cryptoKey,omitempty"`
	CustomAlphabet    *string                                                        `json:"customAlphabet,omitempty"`
	Radix             *int32                                                         `json:"radix,omitempty"`
	SurrogateInfoType *GooglePrivacyDlpV2InfoType                                    `json:"surrogateInfoType,omitempty"`
}
