package shared

type TaskViewEnum string

const (
	TaskViewEnumViewUnspecified TaskViewEnum = "VIEW_UNSPECIFIED"
	TaskViewEnumBasic           TaskViewEnum = "BASIC"
	TaskViewEnumFull            TaskViewEnum = "FULL"
)

type Task struct {
	AppEngineHTTPRequest *AppEngineHTTPRequest `json:"appEngineHttpRequest"`
	CreateTime           *string               `json:"createTime"`
	DispatchCount        *int32                `json:"dispatchCount"`
	DispatchDeadline     *string               `json:"dispatchDeadline"`
	FirstAttempt         *Attempt              `json:"firstAttempt"`
	HTTPRequest          *HTTPRequest          `json:"httpRequest"`
	LastAttempt          *Attempt              `json:"lastAttempt"`
	Name                 *string               `json:"name"`
	ResponseCount        *int32                `json:"responseCount"`
	ScheduleTime         *string               `json:"scheduleTime"`
	View                 *TaskViewEnum         `json:"view"`
}
