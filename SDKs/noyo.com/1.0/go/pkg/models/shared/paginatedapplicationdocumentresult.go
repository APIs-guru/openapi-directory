package shared

// PaginatedApplicationDocumentResultMeta
// Metadata associated with the response data
type PaginatedApplicationDocumentResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type PaginatedApplicationDocumentResult struct {
	Meta     PaginatedApplicationDocumentResultMeta `json:"meta"`
	Response []ApplicationDocumentResult            `json:"response"`
}
