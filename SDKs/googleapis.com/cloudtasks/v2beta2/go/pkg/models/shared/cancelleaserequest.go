package shared

type CancelLeaseRequestResponseViewEnum string

const (
	CancelLeaseRequestResponseViewEnumViewUnspecified CancelLeaseRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	CancelLeaseRequestResponseViewEnumBasic           CancelLeaseRequestResponseViewEnum = "BASIC"
	CancelLeaseRequestResponseViewEnumFull            CancelLeaseRequestResponseViewEnum = "FULL"
)

// CancelLeaseRequest
// Request message for canceling a lease using CancelLease.
type CancelLeaseRequest struct {
	ResponseView *CancelLeaseRequestResponseViewEnum `json:"responseView,omitempty"`
	ScheduleTime *string                             `json:"scheduleTime,omitempty"`
}
