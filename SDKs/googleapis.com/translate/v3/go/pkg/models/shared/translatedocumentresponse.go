package shared

// TranslateDocumentResponse
// A translated document response message.
type TranslateDocumentResponse struct {
	DocumentTranslation         *DocumentTranslation         `json:"documentTranslation,omitempty"`
	GlossaryConfig              *TranslateTextGlossaryConfig `json:"glossaryConfig,omitempty"`
	GlossaryDocumentTranslation *DocumentTranslation         `json:"glossaryDocumentTranslation,omitempty"`
	Model                       *string                      `json:"model,omitempty"`
}
