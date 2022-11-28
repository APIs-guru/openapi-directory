package shared

// SupportedLanguages
// The response message for discovering supported languages.
type SupportedLanguages struct {
	Languages []SupportedLanguage `json:"languages,omitempty"`
}
