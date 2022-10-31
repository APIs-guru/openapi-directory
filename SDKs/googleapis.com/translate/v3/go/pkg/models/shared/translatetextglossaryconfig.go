package shared

type TranslateTextGlossaryConfig struct {
	Glossary   *string `json:"glossary,omitempty"`
	IgnoreCase *bool   `json:"ignoreCase,omitempty"`
}
