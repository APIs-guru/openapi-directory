package shared

// VideoCategory
// A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos.
type VideoCategory struct {
	Etag    *string               `json:"etag,omitempty"`
	ID      *string               `json:"id,omitempty"`
	Kind    *string               `json:"kind,omitempty"`
	Snippet *VideoCategorySnippet `json:"snippet,omitempty"`
}
