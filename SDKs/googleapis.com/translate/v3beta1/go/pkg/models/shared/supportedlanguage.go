package shared

// SupportedLanguage
// A single supported language response corresponds to information related to one supported language.
type SupportedLanguage struct {
	DisplayName   *string `json:"displayName,omitempty"`
	LanguageCode  *string `json:"languageCode,omitempty"`
	SupportSource *bool   `json:"supportSource,omitempty"`
	SupportTarget *bool   `json:"supportTarget,omitempty"`
}
