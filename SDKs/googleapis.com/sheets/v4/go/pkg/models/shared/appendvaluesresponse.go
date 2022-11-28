package shared

// AppendValuesResponse
// The response when updating a range of values in a spreadsheet.
type AppendValuesResponse struct {
	SpreadsheetID *string               `json:"spreadsheetId,omitempty"`
	TableRange    *string               `json:"tableRange,omitempty"`
	Updates       *UpdateValuesResponse `json:"updates,omitempty"`
}
