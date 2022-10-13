package shared

type GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum string

const (
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumFfxCommonNativeAlphabetUnspecified GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED"
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumNumeric                            GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "NUMERIC"
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumHexadecimal                        GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "HEXADECIMAL"
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumUpperCaseAlphaNumeric              GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "UPPER_CASE_ALPHA_NUMERIC"
	GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnumAlphaNumeric                       GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = "ALPHA_NUMERIC"
)

type GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig struct {
	CommonAlphabet    *GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum `json:"commonAlphabet"`
	Context           *GooglePrivacyDlpV2FieldID                                     `json:"context"`
	CryptoKey         *GooglePrivacyDlpV2CryptoKey                                   `json:"cryptoKey"`
	CustomAlphabet    *string                                                        `json:"customAlphabet"`
	Radix             *int32                                                         `json:"radix"`
	SurrogateInfoType *GooglePrivacyDlpV2InfoType                                    `json:"surrogateInfoType"`
}
