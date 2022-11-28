package shared

// SearchHintResult
// Class SearchHintResult.
type SearchHintResult struct {
	SearchHints      []SearchHint `json:"SearchHints,omitempty"`
	TotalRecordCount *int32       `json:"TotalRecordCount,omitempty"`
}
