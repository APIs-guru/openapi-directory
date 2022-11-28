package shared

// ListGroupMembersResponse
// The ListGroupMembers response.
type ListGroupMembersResponse struct {
	Members       []MonitoredResource `json:"members,omitempty"`
	NextPageToken *string             `json:"nextPageToken,omitempty"`
	TotalSize     *int32              `json:"totalSize,omitempty"`
}
