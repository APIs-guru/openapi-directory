package shared

type RunTaskRequestResponseViewEnum string

const (
	RunTaskRequestResponseViewEnumViewUnspecified RunTaskRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	RunTaskRequestResponseViewEnumBasic           RunTaskRequestResponseViewEnum = "BASIC"
	RunTaskRequestResponseViewEnumFull            RunTaskRequestResponseViewEnum = "FULL"
)

// RunTaskRequest
// Request message for forcing a task to run now using RunTask.
type RunTaskRequest struct {
	ResponseView *RunTaskRequestResponseViewEnum `json:"responseView,omitempty"`
}
