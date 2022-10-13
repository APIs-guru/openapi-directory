package shared

type StateHistoryStateEnum string

const (
	StateHistoryStateEnumStateUnspecified StateHistoryStateEnum = "STATE_UNSPECIFIED"
	StateHistoryStateEnumPending          StateHistoryStateEnum = "PENDING"
	StateHistoryStateEnumRunning          StateHistoryStateEnum = "RUNNING"
	StateHistoryStateEnumCancelling       StateHistoryStateEnum = "CANCELLING"
	StateHistoryStateEnumCancelled        StateHistoryStateEnum = "CANCELLED"
	StateHistoryStateEnumSucceeded        StateHistoryStateEnum = "SUCCEEDED"
	StateHistoryStateEnumFailed           StateHistoryStateEnum = "FAILED"
)

type StateHistory struct {
	State          *StateHistoryStateEnum `json:"state"`
	StateMessage   *string                `json:"stateMessage"`
	StateStartTime *string                `json:"stateStartTime"`
}
