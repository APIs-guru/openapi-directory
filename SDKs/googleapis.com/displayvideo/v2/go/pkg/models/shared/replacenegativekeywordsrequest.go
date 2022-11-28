package shared

// ReplaceNegativeKeywordsRequestInput
// Request message for NegativeKeywordService.ReplaceNegativeKeywords.
type ReplaceNegativeKeywordsRequestInput struct {
	NewNegativeKeywords []NegativeKeywordInput `json:"newNegativeKeywords,omitempty"`
}
