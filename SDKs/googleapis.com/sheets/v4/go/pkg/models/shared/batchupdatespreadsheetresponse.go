package shared

type BatchUpdateSpreadsheetResponse struct {
	Replies            []Response   `json:"replies"`
	SpreadsheetID      *string      `json:"spreadsheetId"`
	UpdatedSpreadsheet *Spreadsheet `json:"updatedSpreadsheet"`
}
