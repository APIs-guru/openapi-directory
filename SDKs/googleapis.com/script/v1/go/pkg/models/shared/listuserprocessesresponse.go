package shared

// ListUserProcessesResponse
// Response with the list of Process resources.
type ListUserProcessesResponse struct {
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
	Processes     []GoogleAppsScriptTypeProcess `json:"processes,omitempty"`
}
