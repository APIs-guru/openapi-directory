package shared

type ListScriptProcessesResponse struct {
	NextPageToken *string                       `json:"nextPageToken"`
	Processes     []GoogleAppsScriptTypeProcess `json:"processes"`
}
