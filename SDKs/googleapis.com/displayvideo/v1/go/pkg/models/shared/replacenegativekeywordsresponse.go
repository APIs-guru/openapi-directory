package shared

// ReplaceNegativeKeywordsResponse
// Response message for NegativeKeywordService.ReplaceNegativeKeywords.
type ReplaceNegativeKeywordsResponse struct {
	NegativeKeywords []NegativeKeyword `json:"negativeKeywords,omitempty"`
}
