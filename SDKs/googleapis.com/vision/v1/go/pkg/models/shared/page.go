package shared

type Page struct {
	Blocks     []Block       `json:"blocks,omitempty"`
	Confidence *float32      `json:"confidence,omitempty"`
	Height     *int32        `json:"height,omitempty"`
	Property   *TextProperty `json:"property,omitempty"`
	Width      *int32        `json:"width,omitempty"`
}
