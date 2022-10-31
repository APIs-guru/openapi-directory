package shared



type BatchGetValuesResponse struct {
    SpreadsheetID *string `json:"spreadsheetId,omitempty"`
    ValueRanges []ValueRange `json:"valueRanges,omitempty"`
    
}

