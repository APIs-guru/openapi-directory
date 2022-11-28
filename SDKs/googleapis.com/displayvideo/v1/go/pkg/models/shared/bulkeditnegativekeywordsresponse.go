package shared

// BulkEditNegativeKeywordsResponse
// Response message for NegativeKeywordService.BulkEditNegativeKeywords.
type BulkEditNegativeKeywordsResponse struct {
	NegativeKeywords []NegativeKeyword `json:"negativeKeywords,omitempty"`
}
