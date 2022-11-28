package shared

type TaskViewEnum string

const (
	TaskViewEnumViewUnspecified TaskViewEnum = "VIEW_UNSPECIFIED"
	TaskViewEnumBasic           TaskViewEnum = "BASIC"
	TaskViewEnumFull            TaskViewEnum = "FULL"
)

// Task
// A unit of scheduled work.
type Task struct {
	AppEngineHTTPRequest *AppEngineHTTPRequest `json:"appEngineHttpRequest,omitempty"`
	CreateTime           *string               `json:"createTime,omitempty"`
	HTTPRequest          *HTTPRequest          `json:"httpRequest,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	PullMessage          *PullMessage          `json:"pullMessage,omitempty"`
	ScheduleTime         *string               `json:"scheduleTime,omitempty"`
	Status               *TaskStatus           `json:"status,omitempty"`
	View                 *TaskViewEnum         `json:"view,omitempty"`
}
