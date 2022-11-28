package shared

// PaginationData
// Page containing results.
type PaginationData struct {
	Number        *int64 `json:"number,omitempty"`
	Size          *int64 `json:"size,omitempty"`
	TotalElements *int64 `json:"totalElements,omitempty"`
	TotalPages    *int64 `json:"totalPages,omitempty"`
}
