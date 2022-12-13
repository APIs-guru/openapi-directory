package shared

// PaginatedGroupCoverageResultMeta
// Metadata associated with the response data
type PaginatedGroupCoverageResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedGroupCoverageResult struct {
	Meta     PaginatedGroupCoverageResultMeta `json:"meta"`
	Response []GroupCoverageResult            `json:"response"`
}
