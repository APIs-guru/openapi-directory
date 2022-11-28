package shared

// SearchTransitiveMembershipsResponse
// The response message for MembershipsService.SearchTransitiveMemberships.
type SearchTransitiveMembershipsResponse struct {
	Memberships   []MemberRelation `json:"memberships,omitempty"`
	NextPageToken *string          `json:"nextPageToken,omitempty"`
}
