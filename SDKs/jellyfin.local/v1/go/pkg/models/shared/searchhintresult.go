package shared

type SearchHintResult struct {
	SearchHints      []SearchHint `json:"SearchHints"`
	TotalRecordCount *int32       `json:"TotalRecordCount"`
}
