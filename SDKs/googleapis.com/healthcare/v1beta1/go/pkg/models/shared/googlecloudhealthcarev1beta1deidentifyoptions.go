package shared

// GoogleCloudHealthcareV1beta1DeidentifyOptions
// Specifies additional options to apply to the base `profile`.
type GoogleCloudHealthcareV1beta1DeidentifyOptions struct {
	CharacterMaskConfig *CharacterMaskConfig   `json:"characterMaskConfig,omitempty"`
	ContextualDeid      map[string]interface{} `json:"contextualDeid,omitempty"`
	CryptoHashConfig    *CryptoHashConfig      `json:"cryptoHashConfig,omitempty"`
	DateShiftConfig     *DateShiftConfig       `json:"dateShiftConfig,omitempty"`
	KeepExtensions      map[string]interface{} `json:"keepExtensions,omitempty"`
}
