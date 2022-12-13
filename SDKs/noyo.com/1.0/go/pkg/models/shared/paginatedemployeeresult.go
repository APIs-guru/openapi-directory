package shared

// PaginatedEmployeeResultMeta
// Metadata associated with the response data
type PaginatedEmployeeResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedEmployeeResult struct {
	Meta     PaginatedEmployeeResultMeta `json:"meta"`
	Response []EmployeeResult            `json:"response"`
}
