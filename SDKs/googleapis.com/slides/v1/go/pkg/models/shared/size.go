package shared

type Size struct {
	Height *Dimension `json:"height,omitempty"`
	Width  *Dimension `json:"width,omitempty"`
}
