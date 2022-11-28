package shared

// I18nLanguageSnippet
// Basic details about an i18n language, such as language code and human-readable name.
type I18nLanguageSnippet struct {
	Hl   *string `json:"hl,omitempty"`
	Name *string `json:"name,omitempty"`
}
