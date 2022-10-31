package shared



type BatchUpdateSpreadsheetResponse struct {
    Replies []Response `json:"replies,omitempty"`
    SpreadsheetID *string `json:"spreadsheetId,omitempty"`
    UpdatedSpreadsheet *Spreadsheet `json:"updatedSpreadsheet,omitempty"`
    
}

