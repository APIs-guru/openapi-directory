package shared

type ListLogEntriesResponse struct {
	Entries       []LogEntry `json:"entries,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
