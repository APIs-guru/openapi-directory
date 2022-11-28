package shared

// ListScriptProcessesResponse
// Response with the list of Process resources.
type ListScriptProcessesResponse struct {
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
	Processes     []GoogleAppsScriptTypeProcess `json:"processes,omitempty"`
}
