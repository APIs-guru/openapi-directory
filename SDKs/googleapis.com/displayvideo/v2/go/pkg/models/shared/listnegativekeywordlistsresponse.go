package shared



type ListNegativeKeywordListsResponse struct {
    NegativeKeywordLists []NegativeKeywordList `json:"negativeKeywordLists,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

