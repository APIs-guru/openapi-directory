package shared

// I18nRegion
// A *i18nRegion* resource identifies a region where YouTube is available.
type I18nRegion struct {
	Etag    *string            `json:"etag,omitempty"`
	ID      *string            `json:"id,omitempty"`
	Kind    *string            `json:"kind,omitempty"`
	Snippet *I18nRegionSnippet `json:"snippet,omitempty"`
}
