package shared

// ListLogsResponse
// Result returned from ListLogs.
type ListLogsResponse struct {
	LogNames      []string `json:"logNames,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
