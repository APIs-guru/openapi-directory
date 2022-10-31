package shared

type KeyValueFormat struct {
	Position   *TextPosition `json:"position,omitempty"`
	TextFormat *TextFormat   `json:"textFormat,omitempty"`
}
