package shared

// PaginatedGroupApplicationResultMeta
// Metadata associated with the response data
type PaginatedGroupApplicationResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedGroupApplicationResult struct {
	Meta     PaginatedGroupApplicationResultMeta `json:"meta"`
	Response []GroupApplicationResult            `json:"response"`
}
