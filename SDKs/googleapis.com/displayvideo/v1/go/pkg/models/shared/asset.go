package shared

// Asset
// A single asset.
type Asset struct {
	Content *string `json:"content,omitempty"`
	MediaID *string `json:"mediaId,omitempty"`
}
