package shared

// ListMembershipsResponse
// Response message for the `GkeHubMembershipService.ListMemberships` method.
type ListMembershipsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Resources     []Membership `json:"resources,omitempty"`
	Unreachable   []string     `json:"unreachable,omitempty"`
}
