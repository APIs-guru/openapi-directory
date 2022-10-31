package shared



type BulkEditNegativeKeywordsRequest struct {
    CreatedNegativeKeywords []NegativeKeyword `json:"createdNegativeKeywords,omitempty"`
    DeletedNegativeKeywords []string `json:"deletedNegativeKeywords,omitempty"`
    
}

