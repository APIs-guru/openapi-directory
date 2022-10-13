package shared

type ListCustomBiddingAlgorithmsResponse struct {
	CustomBiddingAlgorithms []CustomBiddingAlgorithm `json:"customBiddingAlgorithms"`
	NextPageToken           *string                  `json:"nextPageToken"`
}
