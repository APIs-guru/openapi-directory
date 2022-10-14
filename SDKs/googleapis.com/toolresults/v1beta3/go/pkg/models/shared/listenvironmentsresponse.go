package shared

type ListEnvironmentsResponse struct {
	Environments  []Environment `json:"environments,omitempty"`
	ExecutionID   *string       `json:"executionId,omitempty"`
	HistoryID     *string       `json:"historyId,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	ProjectID     *string       `json:"projectId,omitempty"`
}
