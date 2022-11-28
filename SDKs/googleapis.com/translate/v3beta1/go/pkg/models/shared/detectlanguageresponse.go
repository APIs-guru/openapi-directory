package shared

// DetectLanguageResponse
// The response message for language detection.
type DetectLanguageResponse struct {
	Languages []DetectedLanguage `json:"languages,omitempty"`
}
