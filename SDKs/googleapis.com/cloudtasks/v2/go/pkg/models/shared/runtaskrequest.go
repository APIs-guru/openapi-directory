package shared

type RunTaskRequestResponseViewEnum string

const (
	RunTaskRequestResponseViewEnumViewUnspecified RunTaskRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	RunTaskRequestResponseViewEnumBasic           RunTaskRequestResponseViewEnum = "BASIC"
	RunTaskRequestResponseViewEnumFull            RunTaskRequestResponseViewEnum = "FULL"
)

type RunTaskRequest struct {
	ResponseView *RunTaskRequestResponseViewEnum `json:"responseView,omitempty"`
}
