package shared

type PaginationMeta struct {
	MaxPage    int64 `json:"max_page"`
	Page       int64 `json:"page"`
	PerPage    int64 `json:"per_page"`
	TotalItems int64 `json:"total_items"`
}
