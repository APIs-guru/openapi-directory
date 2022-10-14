package shared

type BillStageSittingSearchResult struct {
	Items        []BillStageSitting `json:"items,omitempty"`
	ItemsPerPage *int32             `json:"itemsPerPage,omitempty"`
	TotalResults *int32             `json:"totalResults,omitempty"`
}
