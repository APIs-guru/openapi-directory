package shared

type WorkItem struct {
	Configuration            *string                   `json:"configuration"`
	ID                       *string                   `json:"id"`
	InitialReportIndex       *string                   `json:"initialReportIndex"`
	JobID                    *string                   `json:"jobId"`
	LeaseExpireTime          *string                   `json:"leaseExpireTime"`
	MapTask                  *MapTask                  `json:"mapTask"`
	Packages                 []Package                 `json:"packages"`
	ProjectID                *string                   `json:"projectId"`
	ReportStatusInterval     *string                   `json:"reportStatusInterval"`
	SeqMapTask               *SeqMapTask               `json:"seqMapTask"`
	ShellTask                *ShellTask                `json:"shellTask"`
	SourceOperationTask      *SourceOperationRequest   `json:"sourceOperationTask"`
	StreamingComputationTask *StreamingComputationTask `json:"streamingComputationTask"`
	StreamingConfigTask      *StreamingConfigTask      `json:"streamingConfigTask"`
	StreamingSetupTask       *StreamingSetupTask       `json:"streamingSetupTask"`
}
