package shared



type GooglePrivacyDlpV2PrimitiveTransformation struct {
    BucketingConfig *GooglePrivacyDlpV2BucketingConfig `json:"bucketingConfig,omitempty"`
    CharacterMaskConfig *GooglePrivacyDlpV2CharacterMaskConfig `json:"characterMaskConfig,omitempty"`
    CryptoDeterministicConfig *GooglePrivacyDlpV2CryptoDeterministicConfig `json:"cryptoDeterministicConfig,omitempty"`
    CryptoHashConfig *GooglePrivacyDlpV2CryptoHashConfig `json:"cryptoHashConfig,omitempty"`
    CryptoReplaceFfxFpeConfig *GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig `json:"cryptoReplaceFfxFpeConfig,omitempty"`
    DateShiftConfig *GooglePrivacyDlpV2DateShiftConfig `json:"dateShiftConfig,omitempty"`
    FixedSizeBucketingConfig *GooglePrivacyDlpV2FixedSizeBucketingConfig `json:"fixedSizeBucketingConfig,omitempty"`
    RedactConfig map[string]interface{} `json:"redactConfig,omitempty"`
    ReplaceConfig *GooglePrivacyDlpV2ReplaceValueConfig `json:"replaceConfig,omitempty"`
    ReplaceDictionaryConfig *GooglePrivacyDlpV2ReplaceDictionaryConfig `json:"replaceDictionaryConfig,omitempty"`
    ReplaceWithInfoTypeConfig map[string]interface{} `json:"replaceWithInfoTypeConfig,omitempty"`
    TimePartConfig *GooglePrivacyDlpV2TimePartConfig `json:"timePartConfig,omitempty"`
    
}

