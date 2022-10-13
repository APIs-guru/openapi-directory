package shared

type SearchTransitiveMembershipsResponse struct {
	Memberships   []MemberRelation `json:"memberships"`
	NextPageToken *string          `json:"nextPageToken"`
}
