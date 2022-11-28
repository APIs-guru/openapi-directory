package shared

// NegativeKeywordInput
// A negatively targeted keyword that belongs to a negative keyword list.
type NegativeKeywordInput struct {
	KeywordValue *string `json:"keywordValue,omitempty"`
}

// NegativeKeyword
// A negatively targeted keyword that belongs to a negative keyword list.
type NegativeKeyword struct {
	KeywordValue *string `json:"keywordValue,omitempty"`
	Name         *string `json:"name,omitempty"`
}
