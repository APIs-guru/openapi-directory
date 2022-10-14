package shared

type RenewLeaseRequestResponseViewEnum string

const (
	RenewLeaseRequestResponseViewEnumViewUnspecified RenewLeaseRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	RenewLeaseRequestResponseViewEnumBasic           RenewLeaseRequestResponseViewEnum = "BASIC"
	RenewLeaseRequestResponseViewEnumFull            RenewLeaseRequestResponseViewEnum = "FULL"
)

type RenewLeaseRequest struct {
	LeaseDuration *string                            `json:"leaseDuration,omitempty"`
	ResponseView  *RenewLeaseRequestResponseViewEnum `json:"responseView,omitempty"`
	ScheduleTime  *string                            `json:"scheduleTime,omitempty"`
}
