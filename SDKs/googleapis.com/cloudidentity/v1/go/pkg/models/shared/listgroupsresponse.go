package shared

// ListGroupsResponse
// Response message for ListGroups operation.
type ListGroupsResponse struct {
	Groups        []Group `json:"groups,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
