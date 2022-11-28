package shared

// GooglePrivacyDlpV2ImageRedactionConfig
// Configuration for determining how redaction of images should occur.
type GooglePrivacyDlpV2ImageRedactionConfig struct {
	InfoType       *GooglePrivacyDlpV2InfoType `json:"infoType,omitempty"`
	RedactAllText  *bool                       `json:"redactAllText,omitempty"`
	RedactionColor *GooglePrivacyDlpV2Color    `json:"redactionColor,omitempty"`
}
