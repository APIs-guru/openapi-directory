package shared

// ListGroupsResponse
// The response message for GroupsService.ListGroups.
type ListGroupsResponse struct {
	Groups        []Group `json:"groups,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
