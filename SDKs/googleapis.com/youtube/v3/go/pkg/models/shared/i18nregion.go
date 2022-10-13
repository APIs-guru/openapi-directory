package shared

type I18nRegion struct {
	Etag    *string            `json:"etag"`
	ID      *string            `json:"id"`
	Kind    *string            `json:"kind"`
	Snippet *I18nRegionSnippet `json:"snippet"`
}
