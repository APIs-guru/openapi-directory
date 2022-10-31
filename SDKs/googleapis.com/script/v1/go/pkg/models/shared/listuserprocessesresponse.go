package shared

type ListUserProcessesResponse struct {
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
	Processes     []GoogleAppsScriptTypeProcess `json:"processes,omitempty"`
}
