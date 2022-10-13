package shared

type I18nLanguage struct {
	Etag    *string              `json:"etag"`
	ID      *string              `json:"id"`
	Kind    *string              `json:"kind"`
	Snippet *I18nLanguageSnippet `json:"snippet"`
}
