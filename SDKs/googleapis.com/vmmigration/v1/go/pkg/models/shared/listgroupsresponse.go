package shared

type ListGroupsResponse struct {
	Groups        []Group  `json:"groups"`
	NextPageToken *string  `json:"nextPageToken"`
	Unreachable   []string `json:"unreachable"`
}
