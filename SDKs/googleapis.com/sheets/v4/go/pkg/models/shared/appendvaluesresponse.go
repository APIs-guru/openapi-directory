package shared

type AppendValuesResponse struct {
	SpreadsheetID *string               `json:"spreadsheetId"`
	TableRange    *string               `json:"tableRange"`
	Updates       *UpdateValuesResponse `json:"updates"`
}
