package shared

type Page struct {
	Blocks     []Block       `json:"blocks"`
	Confidence *float32      `json:"confidence"`
	Height     *int32        `json:"height"`
	Property   *TextProperty `json:"property"`
	Width      *int32        `json:"width"`
}
