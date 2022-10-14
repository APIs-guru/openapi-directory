package shared

type I18nRegion struct {
	Etag    *string            `json:"etag,omitempty"`
	ID      *string            `json:"id,omitempty"`
	Kind    *string            `json:"kind,omitempty"`
	Snippet *I18nRegionSnippet `json:"snippet,omitempty"`
}
