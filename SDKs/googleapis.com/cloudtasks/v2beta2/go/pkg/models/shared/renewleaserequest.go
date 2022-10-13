package shared

type RenewLeaseRequestResponseViewEnum string

const (
	RenewLeaseRequestResponseViewEnumViewUnspecified RenewLeaseRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	RenewLeaseRequestResponseViewEnumBasic           RenewLeaseRequestResponseViewEnum = "BASIC"
	RenewLeaseRequestResponseViewEnumFull            RenewLeaseRequestResponseViewEnum = "FULL"
)

type RenewLeaseRequest struct {
	LeaseDuration *string                            `json:"leaseDuration"`
	ResponseView  *RenewLeaseRequestResponseViewEnum `json:"responseView"`
	ScheduleTime  *string                            `json:"scheduleTime"`
}
