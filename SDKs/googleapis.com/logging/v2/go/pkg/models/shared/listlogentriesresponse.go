package shared

// ListLogEntriesResponse
// Result returned from ListLogEntries.
type ListLogEntriesResponse struct {
	Entries       []LogEntry `json:"entries,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
