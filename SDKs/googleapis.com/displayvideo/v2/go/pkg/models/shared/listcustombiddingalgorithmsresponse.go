package shared



type ListCustomBiddingAlgorithmsResponse struct {
    CustomBiddingAlgorithms []CustomBiddingAlgorithm `json:"customBiddingAlgorithms,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

