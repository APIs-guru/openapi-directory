package shared

type ListMembershipsResponse struct {
	Memberships   []Membership `json:"memberships"`
	NextPageToken *string      `json:"nextPageToken"`
}
