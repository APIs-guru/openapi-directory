package shared

type SearchTransitiveGroupsResponse struct {
	Memberships   []GroupRelation `json:"memberships"`
	NextPageToken *string         `json:"nextPageToken"`
}
