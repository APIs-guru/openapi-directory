package shared

type BillList struct {
	Pagination PaginationMeta `json:"pagination"`
	Results    []Bill         `json:"results"`
}
