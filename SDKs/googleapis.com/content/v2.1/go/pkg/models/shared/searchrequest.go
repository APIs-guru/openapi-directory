package shared

// SearchRequest
// Request message for the ReportService.Search method.
type SearchRequest struct {
	PageSize  *int32  `json:"pageSize,omitempty"`
	PageToken *string `json:"pageToken,omitempty"`
	Query     *string `json:"query,omitempty"`
}
