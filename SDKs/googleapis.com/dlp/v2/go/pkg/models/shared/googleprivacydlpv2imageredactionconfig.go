package shared

type GooglePrivacyDlpV2ImageRedactionConfig struct {
	InfoType       *GooglePrivacyDlpV2InfoType `json:"infoType"`
	RedactAllText  *bool                       `json:"redactAllText"`
	RedactionColor *GooglePrivacyDlpV2Color    `json:"redactionColor"`
}
