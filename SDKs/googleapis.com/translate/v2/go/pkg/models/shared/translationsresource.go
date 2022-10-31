package shared



type TranslationsResource struct {
    DetectedSourceLanguage *string `json:"detectedSourceLanguage,omitempty"`
    Model *string `json:"model,omitempty"`
    TranslatedText *string `json:"translatedText,omitempty"`
    
}

