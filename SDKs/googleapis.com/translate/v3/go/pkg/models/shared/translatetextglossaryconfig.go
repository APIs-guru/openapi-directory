package shared

type TranslateTextGlossaryConfig struct {
	Glossary   *string `json:"glossary"`
	IgnoreCase *bool   `json:"ignoreCase"`
}
