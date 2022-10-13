package shared

type ClearValuesResponse struct {
	ClearedRange  *string `json:"clearedRange"`
	SpreadsheetID *string `json:"spreadsheetId"`
}
