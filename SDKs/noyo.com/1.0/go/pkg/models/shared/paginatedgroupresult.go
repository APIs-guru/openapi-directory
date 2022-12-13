package shared

// PaginatedGroupResultMeta
// Metadata associated with the response data
type PaginatedGroupResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedGroupResult struct {
	Meta     PaginatedGroupResultMeta `json:"meta"`
	Response []GroupResult            `json:"response"`
}
