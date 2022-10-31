package shared

type DetectedLanguage struct {
	Confidence   *float32 `json:"confidence,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
}
