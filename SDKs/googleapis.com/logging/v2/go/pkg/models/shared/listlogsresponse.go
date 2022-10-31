package shared

type ListLogsResponse struct {
	LogNames      []string `json:"logNames,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
