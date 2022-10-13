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

type EnterpriseCrmEventbusProtoEventExecutionDetails struct {
	EventAttemptStats              []EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats      `json:"eventAttemptStats"`
	EventExecutionSnapshot         []EnterpriseCrmEventbusProtoEventExecutionSnapshot                      `json:"eventExecutionSnapshot"`
	EventExecutionState            *EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum `json:"eventExecutionState"`
	EventRetriesFromBeginningCount *int32                                                                  `json:"eventRetriesFromBeginningCount"`
	LogFilePath                    *string                                                                 `json:"logFilePath"`
	NetworkAddress                 *string                                                                 `json:"networkAddress"`
	NextExecutionTime              *string                                                                 `json:"nextExecutionTime"`
	RyeLockUnheldCount             *int32                                                                  `json:"ryeLockUnheldCount"`
}
