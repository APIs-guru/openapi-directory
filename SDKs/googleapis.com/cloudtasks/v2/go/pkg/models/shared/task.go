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
	DispatchCount        *int32                `json:"dispatchCount,omitempty"`
	DispatchDeadline     *string               `json:"dispatchDeadline,omitempty"`
	FirstAttempt         *Attempt              `json:"firstAttempt,omitempty"`
	HTTPRequest          *HTTPRequest          `json:"httpRequest,omitempty"`
	LastAttempt          *Attempt              `json:"lastAttempt,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	ResponseCount        *int32                `json:"responseCount,omitempty"`
	ScheduleTime         *string               `json:"scheduleTime,omitempty"`
	View                 *TaskViewEnum         `json:"view,omitempty"`
}
