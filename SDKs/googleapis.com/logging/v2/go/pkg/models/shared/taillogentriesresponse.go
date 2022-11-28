package shared

// TailLogEntriesResponse
// Result returned from TailLogEntries.
type TailLogEntriesResponse struct {
	Entries         []LogEntry        `json:"entries,omitempty"`
	SuppressionInfo []SuppressionInfo `json:"suppressionInfo,omitempty"`
}
