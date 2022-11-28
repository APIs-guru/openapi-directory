package shared

// Link
// URL item.
type Link struct {
	ThumbnailURL *string `json:"thumbnailUrl,omitempty"`
	Title        *string `json:"title,omitempty"`
	URL          *string `json:"url,omitempty"`
}
