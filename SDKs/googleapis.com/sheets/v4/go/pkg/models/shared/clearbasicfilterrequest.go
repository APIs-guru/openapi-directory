package shared

// ClearBasicFilterRequest
// Clears the basic filter, if any exists on the sheet.
type ClearBasicFilterRequest struct {
	SheetID *int32 `json:"sheetId,omitempty"`
}
