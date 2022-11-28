package shared

// ListFindingsResponse
// Response message for listing findings.
type ListFindingsResponse struct {
	ListFindingsResults []ListFindingsResult `json:"listFindingsResults,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
	ReadTime            *string              `json:"readTime,omitempty"`
	TotalSize           *int32               `json:"totalSize,omitempty"`
}
