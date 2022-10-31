package shared



type AppendValuesResponse struct {
    SpreadsheetID *string `json:"spreadsheetId,omitempty"`
    TableRange *string `json:"tableRange,omitempty"`
    Updates *UpdateValuesResponse `json:"updates,omitempty"`
    
}

