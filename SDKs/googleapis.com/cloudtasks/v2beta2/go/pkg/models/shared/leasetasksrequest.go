package shared

type LeaseTasksRequestResponseViewEnum string

const (
	LeaseTasksRequestResponseViewEnumViewUnspecified LeaseTasksRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	LeaseTasksRequestResponseViewEnumBasic           LeaseTasksRequestResponseViewEnum = "BASIC"
	LeaseTasksRequestResponseViewEnumFull            LeaseTasksRequestResponseViewEnum = "FULL"
)

type LeaseTasksRequest struct {
	Filter        *string                            `json:"filter"`
	LeaseDuration *string                            `json:"leaseDuration"`
	MaxTasks      *int32                             `json:"maxTasks"`
	ResponseView  *LeaseTasksRequestResponseViewEnum `json:"responseView"`
}
