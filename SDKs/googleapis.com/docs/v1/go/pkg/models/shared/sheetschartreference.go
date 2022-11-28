package shared

// SheetsChartReference
// A reference to a linked chart embedded from Google Sheets.
type SheetsChartReference struct {
	ChartID       *int32  `json:"chartId,omitempty"`
	SpreadsheetID *string `json:"spreadsheetId,omitempty"`
}
