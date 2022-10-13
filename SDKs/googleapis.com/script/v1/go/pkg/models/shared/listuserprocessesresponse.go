package shared

type ListUserProcessesResponse struct {
	NextPageToken *string                       `json:"nextPageToken"`
	Processes     []GoogleAppsScriptTypeProcess `json:"processes"`
}
