package shared

// PaginatedDependentResultMeta
// Metadata associated with the response data
type PaginatedDependentResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedDependentResult struct {
	Meta     PaginatedDependentResultMeta `json:"meta"`
	Response []DependentResult            `json:"response"`
}
