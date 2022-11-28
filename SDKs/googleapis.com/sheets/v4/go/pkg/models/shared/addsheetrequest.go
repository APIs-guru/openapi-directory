package shared

// AddSheetRequest
// Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.
type AddSheetRequest struct {
	Properties *SheetProperties `json:"properties,omitempty"`
}
