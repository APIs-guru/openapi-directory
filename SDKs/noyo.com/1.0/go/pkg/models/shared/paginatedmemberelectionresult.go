package shared

// PaginatedMemberElectionResultMeta
// Metadata associated with the response data
type PaginatedMemberElectionResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedMemberElectionResult struct {
	Meta     PaginatedMemberElectionResultMeta `json:"meta"`
	Response []MemberElectionResult            `json:"response"`
}
