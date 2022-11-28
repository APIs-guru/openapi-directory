package shared

// KeyValueFormat
// Formatting options for key value.
type KeyValueFormat struct {
	Position   *TextPosition `json:"position,omitempty"`
	TextFormat *TextFormat   `json:"textFormat,omitempty"`
}
