package shared

// PaginatedLocationResultMeta
// Metadata associated with the response data
type PaginatedLocationResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedLocationResult struct {
	Meta     PaginatedLocationResultMeta `json:"meta"`
	Response []LocationResult            `json:"response"`
}
