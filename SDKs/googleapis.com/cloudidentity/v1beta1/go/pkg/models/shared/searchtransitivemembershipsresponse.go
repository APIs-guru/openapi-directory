package shared

type SearchTransitiveMembershipsResponse struct {
	Memberships   []MemberRelation `json:"memberships,omitempty"`
	NextPageToken *string          `json:"nextPageToken,omitempty"`
}
