package shared

type ClearValuesResponse struct {
	ClearedRange  *string `json:"clearedRange,omitempty"`
	SpreadsheetID *string `json:"spreadsheetId,omitempty"`
}
