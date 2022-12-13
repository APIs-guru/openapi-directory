package shared

// PaginatedCoveragePlanResultMeta
// Metadata associated with the response data
type PaginatedCoveragePlanResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedCoveragePlanResult struct {
	Meta     PaginatedCoveragePlanResultMeta `json:"meta"`
	Response []CoveragePlanResult            `json:"response"`
}
