package shared

type BillTypeSearchResult struct {
	Items        []BillType `json:"items"`
	ItemsPerPage *int32     `json:"itemsPerPage"`
	TotalResults *int32     `json:"totalResults"`
}
