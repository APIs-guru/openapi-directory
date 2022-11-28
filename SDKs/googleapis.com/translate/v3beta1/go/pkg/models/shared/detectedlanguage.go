package shared

// DetectedLanguage
// The response message for language detection.
type DetectedLanguage struct {
	Confidence   *float32 `json:"confidence,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
}
