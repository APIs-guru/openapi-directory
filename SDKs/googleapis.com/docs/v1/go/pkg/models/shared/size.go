package shared

// Size
// A width and height.
type Size struct {
	Height *Dimension `json:"height,omitempty"`
	Width  *Dimension `json:"width,omitempty"`
}
