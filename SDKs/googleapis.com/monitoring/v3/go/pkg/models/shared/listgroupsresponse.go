package shared

// ListGroupsResponse
// The ListGroups response.
type ListGroupsResponse struct {
	Group         []Group `json:"group,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
