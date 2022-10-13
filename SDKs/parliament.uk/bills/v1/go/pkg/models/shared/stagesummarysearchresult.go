package shared

type StageSummarySearchResult struct {
	Items        []StageSummary `json:"items"`
	ItemsPerPage *int32         `json:"itemsPerPage"`
	TotalResults *int32         `json:"totalResults"`
}
