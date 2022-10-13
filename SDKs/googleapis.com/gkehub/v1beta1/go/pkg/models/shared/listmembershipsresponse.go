package shared

type ListMembershipsResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	Resources     []Membership `json:"resources"`
	Unreachable   []string     `json:"unreachable"`
}
