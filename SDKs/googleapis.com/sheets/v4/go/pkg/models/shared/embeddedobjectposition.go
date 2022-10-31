package shared



type EmbeddedObjectPosition struct {
    NewSheet *bool `json:"newSheet,omitempty"`
    OverlayPosition *OverlayPosition `json:"overlayPosition,omitempty"`
    SheetID *int32 `json:"sheetId,omitempty"`
    
}

