package shared

// ImageAsset
// An image asset object.
type ImageAsset struct {
	Height *int32  `json:"height,omitempty"`
	Kind   *string `json:"kind,omitempty"`
	Name   *string `json:"name,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int32  `json:"width,omitempty"`
}
