package shared

type ListSearchKeywordImpressionsMonthlyResponse struct {
	NextPageToken        *string              `json:"nextPageToken"`
	SearchKeywordsCounts []SearchKeywordCount `json:"searchKeywordsCounts"`
}
