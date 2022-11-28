package shared

// CreativeDimensions
// The dimensions of a creative. This applies to only HTML and Native creatives.
type CreativeDimensions struct {
	Height *string `json:"height,omitempty"`
	Width  *string `json:"width,omitempty"`
}
