package shared

type ListEnvironmentsResponse struct {
	Environments  []Environment `json:"environments"`
	ExecutionID   *string       `json:"executionId"`
	HistoryID     *string       `json:"historyId"`
	NextPageToken *string       `json:"nextPageToken"`
	ProjectID     *string       `json:"projectId"`
}
