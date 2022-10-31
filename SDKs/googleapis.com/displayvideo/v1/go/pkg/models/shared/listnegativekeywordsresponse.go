package shared



type ListNegativeKeywordsResponse struct {
    NegativeKeywords []NegativeKeyword `json:"negativeKeywords,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

