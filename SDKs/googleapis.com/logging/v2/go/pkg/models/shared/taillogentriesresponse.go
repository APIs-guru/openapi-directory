package shared

type TailLogEntriesResponse struct {
	Entries         []LogEntry        `json:"entries,omitempty"`
	SuppressionInfo []SuppressionInfo `json:"suppressionInfo,omitempty"`
}
