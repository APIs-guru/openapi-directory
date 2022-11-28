package shared

// LanguageCodePair
// Used with unidirectional glossaries.
type LanguageCodePair struct {
	SourceLanguageCode *string `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCode *string `json:"targetLanguageCode,omitempty"`
}
