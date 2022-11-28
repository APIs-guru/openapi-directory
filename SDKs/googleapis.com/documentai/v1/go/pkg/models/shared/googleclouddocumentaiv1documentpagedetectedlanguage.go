package shared

// GoogleCloudDocumentaiV1DocumentPageDetectedLanguage
// Detected language for a structural component.
type GoogleCloudDocumentaiV1DocumentPageDetectedLanguage struct {
	Confidence   *float32 `json:"confidence,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
}
