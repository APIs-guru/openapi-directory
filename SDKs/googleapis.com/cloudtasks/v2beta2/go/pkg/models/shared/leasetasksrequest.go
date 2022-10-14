package shared

type LeaseTasksRequestResponseViewEnum string

const (
	LeaseTasksRequestResponseViewEnumViewUnspecified LeaseTasksRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	LeaseTasksRequestResponseViewEnumBasic           LeaseTasksRequestResponseViewEnum = "BASIC"
	LeaseTasksRequestResponseViewEnumFull            LeaseTasksRequestResponseViewEnum = "FULL"
)

type LeaseTasksRequest struct {
	Filter        *string                            `json:"filter,omitempty"`
	LeaseDuration *string                            `json:"leaseDuration,omitempty"`
	MaxTasks      *int32                             `json:"maxTasks,omitempty"`
	ResponseView  *LeaseTasksRequestResponseViewEnum `json:"responseView,omitempty"`
}
