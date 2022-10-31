package shared

type TaskCompletionStatusEnum string

const (
	TaskCompletionStatusEnumCompleted TaskCompletionStatusEnum = "Completed"
	TaskCompletionStatusEnumFailed    TaskCompletionStatusEnum = "Failed"
	TaskCompletionStatusEnumCancelled TaskCompletionStatusEnum = "Cancelled"
	TaskCompletionStatusEnumAborted   TaskCompletionStatusEnum = "Aborted"
)
