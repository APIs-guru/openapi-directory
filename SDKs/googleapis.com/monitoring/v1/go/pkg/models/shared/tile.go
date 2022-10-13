package shared

type Tile struct {
	Height *int32  `json:"height"`
	Widget *Widget `json:"widget"`
	Width  *int32  `json:"width"`
	XPos   *int32  `json:"xPos"`
	YPos   *int32  `json:"yPos"`
}
