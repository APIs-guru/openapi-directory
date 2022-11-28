package shared

// Image
// An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
type Image struct {
	Height *int32  `json:"height,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int32  `json:"width,omitempty"`
}
