package shared

type ListNegativeKeywordListsResponse struct {
	NegativeKeywordLists []NegativeKeywordList `json:"negativeKeywordLists"`
	NextPageToken        *string               `json:"nextPageToken"`
}
