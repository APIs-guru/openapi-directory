package shared

// I18nLanguage
// An *i18nLanguage* resource identifies a UI language currently supported by YouTube.
type I18nLanguage struct {
	Etag    *string              `json:"etag,omitempty"`
	ID      *string              `json:"id,omitempty"`
	Kind    *string              `json:"kind,omitempty"`
	Snippet *I18nLanguageSnippet `json:"snippet,omitempty"`
}
