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
	AttemptID     *string                   `json:"attemptId"`
	EndTime       *string                   `json:"endTime"`
	Metrics       []MetricUpdate            `json:"metrics"`
	Progress      *ProgressTimeseries       `json:"progress"`
	StartTime     *string                   `json:"startTime"`
	State         *WorkItemDetailsStateEnum `json:"state"`
	StragglerInfo *StragglerInfo            `json:"stragglerInfo"`
	TaskID        *string                   `json:"taskId"`
}
