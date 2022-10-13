package shared

type SearchGroupsResponse struct {
	Groups        []Group `json:"groups"`
	NextPageToken *string `json:"nextPageToken"`
}
