package shared

type SearchTransitiveGroupsResponse struct {
	Memberships   []GroupRelation `json:"memberships,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
}
