package shared

type LeaseTasksRequestResponseViewEnum string

const (
	LeaseTasksRequestResponseViewEnumViewUnspecified LeaseTasksRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	LeaseTasksRequestResponseViewEnumBasic           LeaseTasksRequestResponseViewEnum = "BASIC"
	LeaseTasksRequestResponseViewEnumFull            LeaseTasksRequestResponseViewEnum = "FULL"
)

// LeaseTasksRequest
// Request message for leasing tasks using LeaseTasks.
type LeaseTasksRequest struct {
	Filter        *string                            `json:"filter,omitempty"`
	LeaseDuration *string                            `json:"leaseDuration,omitempty"`
	MaxTasks      *int32                             `json:"maxTasks,omitempty"`
	ResponseView  *LeaseTasksRequestResponseViewEnum `json:"responseView,omitempty"`
}
