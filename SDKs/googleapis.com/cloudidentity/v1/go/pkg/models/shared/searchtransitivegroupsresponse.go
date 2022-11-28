package shared

// SearchTransitiveGroupsResponse
// The response message for MembershipsService.SearchTransitiveGroups.
type SearchTransitiveGroupsResponse struct {
	Memberships   []GroupRelation `json:"memberships,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
}
