package shared

// WebImage
// Metadata for online images.
type WebImage struct {
	Score *float32 `json:"score,omitempty"`
	URL   *string  `json:"url,omitempty"`
}
