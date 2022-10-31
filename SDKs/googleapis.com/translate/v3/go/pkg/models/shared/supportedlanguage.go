package shared



type SupportedLanguage struct {
    DisplayName *string `json:"displayName,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    SupportSource *bool `json:"supportSource,omitempty"`
    SupportTarget *bool `json:"supportTarget,omitempty"`
    
}

