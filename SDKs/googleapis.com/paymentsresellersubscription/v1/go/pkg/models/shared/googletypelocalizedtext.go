package shared

// GoogleTypeLocalizedText
// Localized variant of a text in a particular language.
type GoogleTypeLocalizedText struct {
	LanguageCode *string `json:"languageCode,omitempty"`
	Text         *string `json:"text,omitempty"`
}
