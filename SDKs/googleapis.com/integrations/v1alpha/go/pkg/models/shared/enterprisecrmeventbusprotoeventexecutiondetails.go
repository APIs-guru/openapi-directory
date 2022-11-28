package shared

type EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum string

const (
	EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnumUnspecified EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "UNSPECIFIED"
	EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnumOnHold      EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "ON_HOLD"
	EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnumInProcess   EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "IN_PROCESS"
	EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnumSucceeded   EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "SUCCEEDED"
	EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnumFailed      EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "FAILED"
	EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnumCanceled    EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "CANCELED"
	EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnumRetryOnHold EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "RETRY_ON_HOLD"
	EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnumSuspended   EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "SUSPENDED"
)

// EnterpriseCrmEventbusProtoEventExecutionDetails
// Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10
type EnterpriseCrmEventbusProtoEventExecutionDetails struct {
	EventAttemptStats              []EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats      `json:"eventAttemptStats,omitempty"`
	EventExecutionSnapshot         []EnterpriseCrmEventbusProtoEventExecutionSnapshot                      `json:"eventExecutionSnapshot,omitempty"`
	EventExecutionState            *EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum `json:"eventExecutionState,omitempty"`
	EventRetriesFromBeginningCount *int32                                                                  `json:"eventRetriesFromBeginningCount,omitempty"`
	LogFilePath                    *string                                                                 `json:"logFilePath,omitempty"`
	NetworkAddress                 *string                                                                 `json:"networkAddress,omitempty"`
	NextExecutionTime              *string                                                                 `json:"nextExecutionTime,omitempty"`
	RyeLockUnheldCount             *int32                                                                  `json:"ryeLockUnheldCount,omitempty"`
}
