package shared

type ListBiddingFunctionsResponse struct {
	BiddingFunctions []BiddingFunction `json:"biddingFunctions"`
	NextPageToken    *string           `json:"nextPageToken"`
}
