package shared

type WorkItemDetailsStateEnum string

const (
	WorkItemDetailsStateEnumExecutionStateUnknown    WorkItemDetailsStateEnum = "EXECUTION_STATE_UNKNOWN"
	WorkItemDetailsStateEnumExecutionStateNotStarted WorkItemDetailsStateEnum = "EXECUTION_STATE_NOT_STARTED"
	WorkItemDetailsStateEnumExecutionStateRunning    WorkItemDetailsStateEnum = "EXECUTION_STATE_RUNNING"
	WorkItemDetailsStateEnumExecutionStateSucceeded  WorkItemDetailsStateEnum = "EXECUTION_STATE_SUCCEEDED"
	WorkItemDetailsStateEnumExecutionStateFailed     WorkItemDetailsStateEnum = "EXECUTION_STATE_FAILED"
	WorkItemDetailsStateEnumExecutionStateCancelled  WorkItemDetailsStateEnum = "EXECUTION_STATE_CANCELLED"
)

type WorkItemDetails struct {
	AttemptID     *string                   `json:"attemptId,omitempty"`
	EndTime       *string                   `json:"endTime,omitempty"`
	Metrics       []MetricUpdate            `json:"metrics,omitempty"`
	Progress      *ProgressTimeseries       `json:"progress,omitempty"`
	StartTime     *string                   `json:"startTime,omitempty"`
	State         *WorkItemDetailsStateEnum `json:"state,omitempty"`
	StragglerInfo *StragglerInfo            `json:"stragglerInfo,omitempty"`
	TaskID        *string                   `json:"taskId,omitempty"`
}
