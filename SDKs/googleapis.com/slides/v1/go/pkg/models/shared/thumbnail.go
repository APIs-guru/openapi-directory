package shared

// Thumbnail
// The thumbnail of a page.
type Thumbnail struct {
	ContentURL *string `json:"contentUrl,omitempty"`
	Height     *int32  `json:"height,omitempty"`
	Width      *int32  `json:"width,omitempty"`
}
