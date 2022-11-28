package shared

// DetectedLanguage
// Detected language for a structural component.
type DetectedLanguage struct {
	Confidence   *float32 `json:"confidence,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
}
