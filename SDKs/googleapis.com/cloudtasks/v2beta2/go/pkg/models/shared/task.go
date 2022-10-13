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
	HTTPRequest          *HTTPRequest          `json:"httpRequest"`
	Name                 *string               `json:"name"`
	PullMessage          *PullMessage          `json:"pullMessage"`
	ScheduleTime         *string               `json:"scheduleTime"`
	Status               *TaskStatus           `json:"status"`
	View                 *TaskViewEnum         `json:"view"`
}
