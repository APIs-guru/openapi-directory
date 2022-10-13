package shared

type TaskStateEnum string

const (
	TaskStateEnumIdle       TaskStateEnum = "Idle"
	TaskStateEnumCancelling TaskStateEnum = "Cancelling"
	TaskStateEnumRunning    TaskStateEnum = "Running"
)
