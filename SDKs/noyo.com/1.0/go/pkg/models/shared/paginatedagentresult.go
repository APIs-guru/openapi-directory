package shared

// PaginatedAgentResultMeta
// Metadata associated with the response data
type PaginatedAgentResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedAgentResult struct {
	Meta     PaginatedAgentResultMeta `json:"meta"`
	Response []AgentResult            `json:"response"`
}
