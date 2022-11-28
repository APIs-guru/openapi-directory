package shared

// WriteLogEntriesRequestInput
// The parameters to WriteLogEntries.
type WriteLogEntriesRequestInput struct {
	DryRun         *bool              `json:"dryRun,omitempty"`
	Entries        []LogEntryInput    `json:"entries,omitempty"`
	Labels         map[string]string  `json:"labels,omitempty"`
	LogName        *string            `json:"logName,omitempty"`
	PartialSuccess *bool              `json:"partialSuccess,omitempty"`
	Resource       *MonitoredResource `json:"resource,omitempty"`
}
