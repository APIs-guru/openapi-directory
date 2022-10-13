package shared

type ListLogEntriesResponse struct {
	Entries       []LogEntry `json:"entries"`
	NextPageToken *string    `json:"nextPageToken"`
}
