package shared

// YouTubeVideo
// YouTube video item.
type YouTubeVideo struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
	ThumbnailURL  *string `json:"thumbnailUrl,omitempty"`
	Title         *string `json:"title,omitempty"`
}
