package shared

type KeyValueFormat struct {
	Position   *TextPosition `json:"position"`
	TextFormat *TextFormat   `json:"textFormat"`
}
