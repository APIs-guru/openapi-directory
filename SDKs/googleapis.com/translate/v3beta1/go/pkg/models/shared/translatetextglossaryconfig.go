package shared

// TranslateTextGlossaryConfig
// Configures which glossary should be used for a specific target language, and defines options for applying that glossary.
type TranslateTextGlossaryConfig struct {
	Glossary   *string `json:"glossary,omitempty"`
	IgnoreCase *bool   `json:"ignoreCase,omitempty"`
}
