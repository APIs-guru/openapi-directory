package shared



type ListBiddingFunctionsResponse struct {
    BiddingFunctions []BiddingFunction `json:"biddingFunctions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

