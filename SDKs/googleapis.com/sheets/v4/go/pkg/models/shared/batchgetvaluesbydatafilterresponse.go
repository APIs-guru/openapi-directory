package shared

type BatchGetValuesByDataFilterResponse struct {
	SpreadsheetID *string             `json:"spreadsheetId"`
	ValueRanges   []MatchedValueRange `json:"valueRanges"`
}
