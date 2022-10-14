package shared

type StageSummarySearchResult struct {
	Items        []StageSummary `json:"items,omitempty"`
	ItemsPerPage *int32         `json:"itemsPerPage,omitempty"`
	TotalResults *int32         `json:"totalResults,omitempty"`
}
