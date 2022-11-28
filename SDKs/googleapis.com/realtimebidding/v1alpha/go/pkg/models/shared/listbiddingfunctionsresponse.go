package shared

// ListBiddingFunctionsResponse
// A response containing a list of a bidder's bidding functions.
type ListBiddingFunctionsResponse struct {
	BiddingFunctions []BiddingFunction `json:"biddingFunctions,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
}
