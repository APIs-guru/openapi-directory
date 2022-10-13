package shared

type EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnumUnspecified EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "UNSPECIFIED"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnumOnHold      EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "ON_HOLD"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnumInProcess   EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "IN_PROCESS"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnumSucceeded   EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "SUCCEEDED"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnumFailed      EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "FAILED"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnumCanceled    EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "CANCELED"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnumRetryOnHold EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "RETRY_ON_HOLD"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnumSuspended   EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum = "SUSPENDED"
)

type EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails struct {
	EventAttemptStats              []EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats               `json:"eventAttemptStats"`
	EventExecutionSnapshot         []EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot                      `json:"eventExecutionSnapshot"`
	EventExecutionState            *EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum `json:"eventExecutionState"`
	EventRetriesFromBeginningCount *int32                                                                           `json:"eventRetriesFromBeginningCount"`
	LogFilePath                    *string                                                                          `json:"logFilePath"`
	NetworkAddress                 *string                                                                          `json:"networkAddress"`
	NextExecutionTime              *string                                                                          `json:"nextExecutionTime"`
	RyeLockUnheldCount             *int32                                                                           `json:"ryeLockUnheldCount"`
}
