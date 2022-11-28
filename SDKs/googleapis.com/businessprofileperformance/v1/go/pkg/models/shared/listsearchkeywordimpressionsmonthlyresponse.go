package shared

// ListSearchKeywordImpressionsMonthlyResponse
// Represents the response for ListSearchKeywordImpressionsMonthly.
type ListSearchKeywordImpressionsMonthlyResponse struct {
	NextPageToken        *string              `json:"nextPageToken,omitempty"`
	SearchKeywordsCounts []SearchKeywordCount `json:"searchKeywordsCounts,omitempty"`
}
