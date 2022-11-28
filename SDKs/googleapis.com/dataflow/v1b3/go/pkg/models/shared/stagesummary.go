package shared

type StageSummaryStateEnum string

const (
	StageSummaryStateEnumExecutionStateUnknown    StageSummaryStateEnum = "EXECUTION_STATE_UNKNOWN"
	StageSummaryStateEnumExecutionStateNotStarted StageSummaryStateEnum = "EXECUTION_STATE_NOT_STARTED"
	StageSummaryStateEnumExecutionStateRunning    StageSummaryStateEnum = "EXECUTION_STATE_RUNNING"
	StageSummaryStateEnumExecutionStateSucceeded  StageSummaryStateEnum = "EXECUTION_STATE_SUCCEEDED"
	StageSummaryStateEnumExecutionStateFailed     StageSummaryStateEnum = "EXECUTION_STATE_FAILED"
	StageSummaryStateEnumExecutionStateCancelled  StageSummaryStateEnum = "EXECUTION_STATE_CANCELLED"
)

// StageSummary
// Information about a particular execution stage of a job.
type StageSummary struct {
	EndTime          *string                `json:"endTime,omitempty"`
	Metrics          []MetricUpdate         `json:"metrics,omitempty"`
	Progress         *ProgressTimeseries    `json:"progress,omitempty"`
	StageID          *string                `json:"stageId,omitempty"`
	StartTime        *string                `json:"startTime,omitempty"`
	State            *StageSummaryStateEnum `json:"state,omitempty"`
	StragglerSummary *StragglerSummary      `json:"stragglerSummary,omitempty"`
}
