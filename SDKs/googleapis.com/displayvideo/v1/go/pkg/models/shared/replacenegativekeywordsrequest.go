package shared

type ReplaceNegativeKeywordsRequest struct {
	NewNegativeKeywords []NegativeKeyword `json:"newNegativeKeywords"`
}
