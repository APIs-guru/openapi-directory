package shared

type TranslateDocumentResponse struct {
	DocumentTranslation         *DocumentTranslation         `json:"documentTranslation"`
	GlossaryConfig              *TranslateTextGlossaryConfig `json:"glossaryConfig"`
	GlossaryDocumentTranslation *DocumentTranslation         `json:"glossaryDocumentTranslation"`
	Model                       *string                      `json:"model"`
}
