package shared

type OverlayPosition struct {
	AnchorCell    *GridCoordinate `json:"anchorCell"`
	HeightPixels  *int32          `json:"heightPixels"`
	OffsetXPixels *int32          `json:"offsetXPixels"`
	OffsetYPixels *int32          `json:"offsetYPixels"`
	WidthPixels   *int32          `json:"widthPixels"`
}
