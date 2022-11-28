package shared

// ListGroupsResponse
// Response message for 'ListGroups' request.
type ListGroupsResponse struct {
	Groups        []Group  `json:"groups,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
