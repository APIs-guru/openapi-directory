package shared

// OverlayPosition
// The location an object is overlaid on top of a grid.
type OverlayPosition struct {
	AnchorCell    *GridCoordinate `json:"anchorCell,omitempty"`
	HeightPixels  *int32          `json:"heightPixels,omitempty"`
	OffsetXPixels *int32          `json:"offsetXPixels,omitempty"`
	OffsetYPixels *int32          `json:"offsetYPixels,omitempty"`
	WidthPixels   *int32          `json:"widthPixels,omitempty"`
}
