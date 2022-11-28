package shared

// WorkItem
// WorkItem represents basic information about a WorkItem to be executed in the cloud.
type WorkItem struct {
	Configuration            *string                   `json:"configuration,omitempty"`
	ID                       *string                   `json:"id,omitempty"`
	InitialReportIndex       *string                   `json:"initialReportIndex,omitempty"`
	JobID                    *string                   `json:"jobId,omitempty"`
	LeaseExpireTime          *string                   `json:"leaseExpireTime,omitempty"`
	MapTask                  *MapTask                  `json:"mapTask,omitempty"`
	Packages                 []Package                 `json:"packages,omitempty"`
	ProjectID                *string                   `json:"projectId,omitempty"`
	ReportStatusInterval     *string                   `json:"reportStatusInterval,omitempty"`
	SeqMapTask               *SeqMapTask               `json:"seqMapTask,omitempty"`
	ShellTask                *ShellTask                `json:"shellTask,omitempty"`
	SourceOperationTask      *SourceOperationRequest   `json:"sourceOperationTask,omitempty"`
	StreamingComputationTask *StreamingComputationTask `json:"streamingComputationTask,omitempty"`
	StreamingConfigTask      *StreamingConfigTask      `json:"streamingConfigTask,omitempty"`
	StreamingSetupTask       *StreamingSetupTask       `json:"streamingSetupTask,omitempty"`
}
