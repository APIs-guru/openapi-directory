package shared

// GoogleCloudDataplexV1TaskExecutionStatus
// Status of the task execution (e.g. Jobs).
type GoogleCloudDataplexV1TaskExecutionStatus struct {
	LatestJob  *GoogleCloudDataplexV1Job `json:"latestJob,omitempty"`
	UpdateTime *string                   `json:"updateTime,omitempty"`
}
