package shared

// BulkEditNegativeKeywordsRequestInput
// Request message for NegativeKeywordService.BulkEditNegativeKeywords.
type BulkEditNegativeKeywordsRequestInput struct {
	CreatedNegativeKeywords []NegativeKeywordInput `json:"createdNegativeKeywords,omitempty"`
	DeletedNegativeKeywords []string               `json:"deletedNegativeKeywords,omitempty"`
}
