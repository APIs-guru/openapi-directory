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

type StageSummary struct {
	EndTime          *string                `json:"endTime"`
	Metrics          []MetricUpdate         `json:"metrics"`
	Progress         *ProgressTimeseries    `json:"progress"`
	StageID          *string                `json:"stageId"`
	StartTime        *string                `json:"startTime"`
	State            *StageSummaryStateEnum `json:"state"`
	StragglerSummary *StragglerSummary      `json:"stragglerSummary"`
}
