package shared

// BatchUpdateSpreadsheetResponse
// The reply for batch updating a spreadsheet.
type BatchUpdateSpreadsheetResponse struct {
	Replies            []Response   `json:"replies,omitempty"`
	SpreadsheetID      *string      `json:"spreadsheetId,omitempty"`
	UpdatedSpreadsheet *Spreadsheet `json:"updatedSpreadsheet,omitempty"`
}
