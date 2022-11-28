package shared

type CreateTaskRequestResponseViewEnum string

const (
	CreateTaskRequestResponseViewEnumViewUnspecified CreateTaskRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	CreateTaskRequestResponseViewEnumBasic           CreateTaskRequestResponseViewEnum = "BASIC"
	CreateTaskRequestResponseViewEnumFull            CreateTaskRequestResponseViewEnum = "FULL"
)

// CreateTaskRequest
// Request message for CreateTask.
type CreateTaskRequest struct {
	ResponseView *CreateTaskRequestResponseViewEnum `json:"responseView,omitempty"`
	Task         *Task                              `json:"task,omitempty"`
}
