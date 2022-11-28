package shared

// SearchKeywordCount
// Represents a single search keyword and its value.
type SearchKeywordCount struct {
	InsightsValue *InsightsValue `json:"insightsValue,omitempty"`
	SearchKeyword *string        `json:"searchKeyword,omitempty"`
}
