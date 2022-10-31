package shared



type BatchGetValuesByDataFilterResponse struct {
    SpreadsheetID *string `json:"spreadsheetId,omitempty"`
    ValueRanges []MatchedValueRange `json:"valueRanges,omitempty"`
    
}

