package shared

// Tile
// A single tile in the mosaic. The placement and size of the tile are configurable.
type Tile struct {
	Height *int32  `json:"height,omitempty"`
	Widget *Widget `json:"widget,omitempty"`
	Width  *int32  `json:"width,omitempty"`
	XPos   *int32  `json:"xPos,omitempty"`
	YPos   *int32  `json:"yPos,omitempty"`
}
