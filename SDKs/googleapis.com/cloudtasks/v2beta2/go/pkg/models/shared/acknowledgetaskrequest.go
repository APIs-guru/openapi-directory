package shared

// AcknowledgeTaskRequest
// Request message for acknowledging a task using AcknowledgeTask.
type AcknowledgeTaskRequest struct {
	ScheduleTime *string `json:"scheduleTime,omitempty"`
}
