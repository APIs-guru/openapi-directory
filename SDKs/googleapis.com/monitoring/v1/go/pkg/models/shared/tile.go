package shared

type Tile struct {
	Height *int32  `json:"height,omitempty"`
	Widget *Widget `json:"widget,omitempty"`
	Width  *int32  `json:"width,omitempty"`
	XPos   *int32  `json:"xPos,omitempty"`
	YPos   *int32  `json:"yPos,omitempty"`
}
