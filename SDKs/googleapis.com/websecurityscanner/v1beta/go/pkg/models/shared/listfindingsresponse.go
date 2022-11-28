package shared

// ListFindingsResponse
// Response for the `ListFindings` method.
type ListFindingsResponse struct {
	Findings      []Finding `json:"findings,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
