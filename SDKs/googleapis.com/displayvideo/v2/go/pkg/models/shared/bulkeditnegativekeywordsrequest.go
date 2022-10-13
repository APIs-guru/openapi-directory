package shared

type BulkEditNegativeKeywordsRequest struct {
	CreatedNegativeKeywords []NegativeKeyword `json:"createdNegativeKeywords"`
	DeletedNegativeKeywords []string          `json:"deletedNegativeKeywords"`
}
