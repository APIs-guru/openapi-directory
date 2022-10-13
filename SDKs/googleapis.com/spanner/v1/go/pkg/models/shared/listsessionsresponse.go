package shared

type ListSessionsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Sessions      []Session `json:"sessions"`
}
