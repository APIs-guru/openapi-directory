package shared



type ListScriptProcessesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Processes []GoogleAppsScriptTypeProcess `json:"processes,omitempty"`
    
}

