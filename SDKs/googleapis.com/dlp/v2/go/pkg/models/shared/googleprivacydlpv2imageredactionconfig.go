package shared

type GooglePrivacyDlpV2ImageRedactionConfig struct {
	InfoType       *GooglePrivacyDlpV2InfoType `json:"infoType,omitempty"`
	RedactAllText  *bool                       `json:"redactAllText,omitempty"`
	RedactionColor *GooglePrivacyDlpV2Color    `json:"redactionColor,omitempty"`
}
