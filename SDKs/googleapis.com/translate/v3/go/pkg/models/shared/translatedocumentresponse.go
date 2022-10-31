package shared



type TranslateDocumentResponse struct {
    DocumentTranslation *DocumentTranslation `json:"documentTranslation,omitempty"`
    GlossaryConfig *TranslateTextGlossaryConfig `json:"glossaryConfig,omitempty"`
    GlossaryDocumentTranslation *DocumentTranslation `json:"glossaryDocumentTranslation,omitempty"`
    Model *string `json:"model,omitempty"`
    
}

