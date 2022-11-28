package shared

// WebLabel
// Label to provide extra metadata for the web detection.
type WebLabel struct {
	Label        *string `json:"label,omitempty"`
	LanguageCode *string `json:"languageCode,omitempty"`
}
