package shared

// PaginatedAgentLocationResultMeta
// Metadata associated with the response data
type PaginatedAgentLocationResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedAgentLocationResult struct {
	Meta     PaginatedAgentLocationResultMeta `json:"meta"`
	Response []AgentLocationResult            `json:"response"`
}
