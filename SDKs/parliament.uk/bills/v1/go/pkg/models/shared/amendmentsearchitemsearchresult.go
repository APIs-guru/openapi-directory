package shared

type AmendmentSearchItemSearchResult struct {
	Items        []AmendmentSearchItem `json:"items"`
	ItemsPerPage *int32                `json:"itemsPerPage"`
	TotalResults *int32                `json:"totalResults"`
}
