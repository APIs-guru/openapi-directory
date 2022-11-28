package shared

// ListNegativeKeywordListsResponse
// Response message for NegativeKeywordListService.ListNegativeKeywordLists.
type ListNegativeKeywordListsResponse struct {
	NegativeKeywordLists []NegativeKeywordList `json:"negativeKeywordLists,omitempty"`
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
}
