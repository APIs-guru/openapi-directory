package shared

type ListSessionsResponse struct {
	DeletedSession []Session `json:"deletedSession,omitempty"`
	HasMoreData    *bool     `json:"hasMoreData,omitempty"`
	NextPageToken  *string   `json:"nextPageToken,omitempty"`
	Session        []Session `json:"session,omitempty"`
}
