package shared

// EmbeddedObjectPosition
// The position of an embedded object such as a chart.
type EmbeddedObjectPosition struct {
	NewSheet        *bool            `json:"newSheet,omitempty"`
	OverlayPosition *OverlayPosition `json:"overlayPosition,omitempty"`
	SheetID         *int32           `json:"sheetId,omitempty"`
}
