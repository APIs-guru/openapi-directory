package shared

// Caption
// A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
type Caption struct {
	Etag    *string         `json:"etag,omitempty"`
	ID      *string         `json:"id,omitempty"`
	Kind    *string         `json:"kind,omitempty"`
	Snippet *CaptionSnippet `json:"snippet,omitempty"`
}
