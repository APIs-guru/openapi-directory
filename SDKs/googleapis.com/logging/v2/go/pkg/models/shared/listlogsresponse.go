package shared

type ListLogsResponse struct {
	LogNames      []string `json:"logNames"`
	NextPageToken *string  `json:"nextPageToken"`
}
