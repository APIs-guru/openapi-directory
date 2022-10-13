package shared

type ListGroupsResponse struct {
	Group         []Group `json:"group"`
	NextPageToken *string `json:"nextPageToken"`
}
