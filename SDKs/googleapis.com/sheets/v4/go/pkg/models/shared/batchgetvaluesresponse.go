package shared

type BatchGetValuesResponse struct {
	SpreadsheetID *string      `json:"spreadsheetId"`
	ValueRanges   []ValueRange `json:"valueRanges"`
}
