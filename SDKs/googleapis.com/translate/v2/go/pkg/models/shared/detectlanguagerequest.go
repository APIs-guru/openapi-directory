package shared

// DetectLanguageRequest
// The request message for language detection.
type DetectLanguageRequest struct {
	Q []string `json:"q,omitempty"`
}
