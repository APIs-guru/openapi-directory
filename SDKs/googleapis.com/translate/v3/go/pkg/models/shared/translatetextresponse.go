package shared



type TranslateTextResponse struct {
    GlossaryTranslations []Translation `json:"glossaryTranslations,omitempty"`
    Translations []Translation `json:"translations,omitempty"`
    
}

