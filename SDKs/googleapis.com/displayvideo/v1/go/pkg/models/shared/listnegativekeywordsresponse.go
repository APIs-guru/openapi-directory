package shared

type ListNegativeKeywordsResponse struct {
	NegativeKeywords []NegativeKeyword `json:"negativeKeywords"`
	NextPageToken    *string           `json:"nextPageToken"`
}
