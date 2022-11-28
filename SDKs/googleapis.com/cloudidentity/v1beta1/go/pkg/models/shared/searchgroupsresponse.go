package shared

// SearchGroupsResponse
// The response message for GroupsService.SearchGroups.
type SearchGroupsResponse struct {
	Groups        []Group `json:"groups,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
