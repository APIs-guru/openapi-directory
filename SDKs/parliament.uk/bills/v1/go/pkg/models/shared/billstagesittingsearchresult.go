package shared

type BillStageSittingSearchResult struct {
	Items        []BillStageSitting `json:"items"`
	ItemsPerPage *int32             `json:"itemsPerPage"`
	TotalResults *int32             `json:"totalResults"`
}
