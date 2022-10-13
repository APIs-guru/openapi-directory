package shared

type WriteLogEntriesRequest struct {
	DryRun         *bool              `json:"dryRun"`
	Entries        []LogEntry         `json:"entries"`
	Labels         map[string]string  `json:"labels"`
	LogName        *string            `json:"logName"`
	PartialSuccess *bool              `json:"partialSuccess"`
	Resource       *MonitoredResource `json:"resource"`
}
