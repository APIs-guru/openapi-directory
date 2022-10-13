package shared

type VideoCategory struct {
	Etag    *string               `json:"etag"`
	ID      *string               `json:"id"`
	Kind    *string               `json:"kind"`
	Snippet *VideoCategorySnippet `json:"snippet"`
}
