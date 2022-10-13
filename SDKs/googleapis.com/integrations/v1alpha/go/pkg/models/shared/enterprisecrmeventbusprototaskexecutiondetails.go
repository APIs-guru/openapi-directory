package shared

type EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum string

const (
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumUnspecified       EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "UNSPECIFIED"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumPendingExecution  EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "PENDING_EXECUTION"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumInProcess         EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "IN_PROCESS"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumSucceed           EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "SUCCEED"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumFailed            EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "FAILED"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumFatal             EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "FATAL"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumRetryOnHold       EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "RETRY_ON_HOLD"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumSkipped           EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "SKIPPED"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumCanceled          EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "CANCELED"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumPendingRollback   EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "PENDING_ROLLBACK"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumRollbackInProcess EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "ROLLBACK_IN_PROCESS"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumRolledback        EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "ROLLEDBACK"
	EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnumSuspended         EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = "SUSPENDED"
)

type EnterpriseCrmEventbusProtoTaskExecutionDetails struct {
	TaskAttemptStats   []EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats      `json:"taskAttemptStats"`
	TaskExecutionState *EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum `json:"taskExecutionState"`
	TaskNumber         *string                                                               `json:"taskNumber"`
}
