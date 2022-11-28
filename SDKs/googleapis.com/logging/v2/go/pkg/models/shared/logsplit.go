package shared

// LogSplit
// Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries.
type LogSplit struct {
	Index       *int32  `json:"index,omitempty"`
	TotalSplits *int32  `json:"totalSplits,omitempty"`
	UID         *string `json:"uid,omitempty"`
}
