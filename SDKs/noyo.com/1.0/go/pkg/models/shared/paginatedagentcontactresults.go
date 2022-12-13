package shared

// PaginatedAgentContactResultsMeta
// Metadata associated with the response data
type PaginatedAgentContactResultsMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedAgentContactResults struct {
	Meta     PaginatedAgentContactResultsMeta `json:"meta"`
	Response []AgentContactResult             `json:"response"`
}
