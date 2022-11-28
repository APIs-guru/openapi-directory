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

// StateHistory
// Historical state information.
type StateHistory struct {
	State          *StateHistoryStateEnum `json:"state,omitempty"`
	StateMessage   *string                `json:"stateMessage,omitempty"`
	StateStartTime *string                `json:"stateStartTime,omitempty"`
}
