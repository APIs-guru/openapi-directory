package shared

type GooglePrivacyDlpV2PrimitiveTransformation struct {
	BucketingConfig           *GooglePrivacyDlpV2BucketingConfig           `json:"bucketingConfig"`
	CharacterMaskConfig       *GooglePrivacyDlpV2CharacterMaskConfig       `json:"characterMaskConfig"`
	CryptoDeterministicConfig *GooglePrivacyDlpV2CryptoDeterministicConfig `json:"cryptoDeterministicConfig"`
	CryptoHashConfig          *GooglePrivacyDlpV2CryptoHashConfig          `json:"cryptoHashConfig"`
	CryptoReplaceFfxFpeConfig *GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig `json:"cryptoReplaceFfxFpeConfig"`
	DateShiftConfig           *GooglePrivacyDlpV2DateShiftConfig           `json:"dateShiftConfig"`
	FixedSizeBucketingConfig  *GooglePrivacyDlpV2FixedSizeBucketingConfig  `json:"fixedSizeBucketingConfig"`
	RedactConfig              map[string]interface{}                       `json:"redactConfig"`
	ReplaceConfig             *GooglePrivacyDlpV2ReplaceValueConfig        `json:"replaceConfig"`
	ReplaceDictionaryConfig   *GooglePrivacyDlpV2ReplaceDictionaryConfig   `json:"replaceDictionaryConfig"`
	ReplaceWithInfoTypeConfig map[string]interface{}                       `json:"replaceWithInfoTypeConfig"`
	TimePartConfig            *GooglePrivacyDlpV2TimePartConfig            `json:"timePartConfig"`
}
