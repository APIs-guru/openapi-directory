package shared

type Caption struct {
	Etag    *string         `json:"etag"`
	ID      *string         `json:"id"`
	Kind    *string         `json:"kind"`
	Snippet *CaptionSnippet `json:"snippet"`
}
