package shared

type EmbeddedObjectPosition struct {
	NewSheet        *bool            `json:"newSheet"`
	OverlayPosition *OverlayPosition `json:"overlayPosition"`
	SheetID         *int32           `json:"sheetId"`
}
