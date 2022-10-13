package shared

type BillSummarySearchResult struct {
	Items        []BillSummary `json:"items"`
	ItemsPerPage *int32        `json:"itemsPerPage"`
	TotalResults *int32        `json:"totalResults"`
}
