package shared

// Thumbnail
// A thumbnail is an image representing a YouTube resource.
type Thumbnail struct {
	Height *int64  `json:"height,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int64  `json:"width,omitempty"`
}
