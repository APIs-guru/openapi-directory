package shared

type ListSessionsResponse struct {
	DeletedSession []Session `json:"deletedSession"`
	HasMoreData    *bool     `json:"hasMoreData"`
	NextPageToken  *string   `json:"nextPageToken"`
	Session        []Session `json:"session"`
}
