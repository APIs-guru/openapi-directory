package shared

type SearchGroupsResponse struct {
	Groups        []Group `json:"groups,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
