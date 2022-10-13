package shared

type PaginationData struct {
	Number        *int64 `json:"number"`
	Size          *int64 `json:"size"`
	TotalElements *int64 `json:"totalElements"`
	TotalPages    *int64 `json:"totalPages"`
}
