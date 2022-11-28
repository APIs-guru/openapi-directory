package shared

// TranslateTextRequest
// The request message for synchronous translation.
type TranslateTextRequest struct {
	Contents           []string                     `json:"contents,omitempty"`
	GlossaryConfig     *TranslateTextGlossaryConfig `json:"glossaryConfig,omitempty"`
	Labels             map[string]string            `json:"labels,omitempty"`
	MimeType           *string                      `json:"mimeType,omitempty"`
	Model              *string                      `json:"model,omitempty"`
	SourceLanguageCode *string                      `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCode *string                      `json:"targetLanguageCode,omitempty"`
}
