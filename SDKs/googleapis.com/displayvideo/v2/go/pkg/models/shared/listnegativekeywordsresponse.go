package shared

// ListNegativeKeywordsResponse
// Response message for NegativeKeywordService.ListNegativeKeywords.
type ListNegativeKeywordsResponse struct {
	NegativeKeywords []NegativeKeyword `json:"negativeKeywords,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
}
