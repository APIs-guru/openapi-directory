package shared

// ListGroupsResponse
// Response message for GroupsService.ListGroups.
type ListGroupsResponse struct {
	Errors        *Errors `json:"errors,omitempty"`
	Etag          *string `json:"etag,omitempty"`
	Items         []Group `json:"items,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
