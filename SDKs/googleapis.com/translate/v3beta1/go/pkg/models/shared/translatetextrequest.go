package shared

type TranslateTextRequest struct {
	Contents           []string                     `json:"contents"`
	GlossaryConfig     *TranslateTextGlossaryConfig `json:"glossaryConfig"`
	Labels             map[string]string            `json:"labels"`
	MimeType           *string                      `json:"mimeType"`
	Model              *string                      `json:"model"`
	SourceLanguageCode *string                      `json:"sourceLanguageCode"`
	TargetLanguageCode *string                      `json:"targetLanguageCode"`
}
