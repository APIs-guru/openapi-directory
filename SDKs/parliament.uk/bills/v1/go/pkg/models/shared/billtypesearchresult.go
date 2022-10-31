package shared

type BillTypeSearchResult struct {
	Items        []BillType `json:"items,omitempty"`
	ItemsPerPage *int32     `json:"itemsPerPage,omitempty"`
	TotalResults *int32     `json:"totalResults,omitempty"`
}
