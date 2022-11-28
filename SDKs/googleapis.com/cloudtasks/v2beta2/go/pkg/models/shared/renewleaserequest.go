package shared

type RenewLeaseRequestResponseViewEnum string

const (
	RenewLeaseRequestResponseViewEnumViewUnspecified RenewLeaseRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	RenewLeaseRequestResponseViewEnumBasic           RenewLeaseRequestResponseViewEnum = "BASIC"
	RenewLeaseRequestResponseViewEnumFull            RenewLeaseRequestResponseViewEnum = "FULL"
)

// RenewLeaseRequest
// Request message for renewing a lease using RenewLease.
type RenewLeaseRequest struct {
	LeaseDuration *string                            `json:"leaseDuration,omitempty"`
	ResponseView  *RenewLeaseRequestResponseViewEnum `json:"responseView,omitempty"`
	ScheduleTime  *string                            `json:"scheduleTime,omitempty"`
}
