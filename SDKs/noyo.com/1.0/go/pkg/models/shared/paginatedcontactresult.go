package shared

// PaginatedContactResultMeta
// Metadata associated with the response data
type PaginatedContactResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedContactResult struct {
	Meta     PaginatedContactResultMeta `json:"meta"`
	Response []ContactResult            `json:"response"`
}
