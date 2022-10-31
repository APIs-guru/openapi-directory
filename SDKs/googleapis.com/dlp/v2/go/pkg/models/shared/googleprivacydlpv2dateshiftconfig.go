package shared



type GooglePrivacyDlpV2DateShiftConfig struct {
    Context *GooglePrivacyDlpV2FieldID `json:"context,omitempty"`
    CryptoKey *GooglePrivacyDlpV2CryptoKey `json:"cryptoKey,omitempty"`
    LowerBoundDays *int32 `json:"lowerBoundDays,omitempty"`
    UpperBoundDays *int32 `json:"upperBoundDays,omitempty"`
    
}

