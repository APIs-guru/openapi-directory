package shared

type WriteLogEntriesRequest struct {
	DryRun         *bool              `json:"dryRun,omitempty"`
	Entries        []LogEntry         `json:"entries,omitempty"`
	Labels         map[string]string  `json:"labels,omitempty"`
	LogName        *string            `json:"logName,omitempty"`
	PartialSuccess *bool              `json:"partialSuccess,omitempty"`
	Resource       *MonitoredResource `json:"resource,omitempty"`
}
