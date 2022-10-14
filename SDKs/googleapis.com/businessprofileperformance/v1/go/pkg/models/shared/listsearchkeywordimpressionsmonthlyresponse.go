package shared

type ListSearchKeywordImpressionsMonthlyResponse struct {
	NextPageToken        *string              `json:"nextPageToken,omitempty"`
	SearchKeywordsCounts []SearchKeywordCount `json:"searchKeywordsCounts,omitempty"`
}
