package shared

type TailLogEntriesResponse struct {
	Entries         []LogEntry        `json:"entries"`
	SuppressionInfo []SuppressionInfo `json:"suppressionInfo"`
}
