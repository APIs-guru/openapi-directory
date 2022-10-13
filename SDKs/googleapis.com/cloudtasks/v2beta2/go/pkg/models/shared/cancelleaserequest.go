package shared

type CancelLeaseRequestResponseViewEnum string

const (
	CancelLeaseRequestResponseViewEnumViewUnspecified CancelLeaseRequestResponseViewEnum = "VIEW_UNSPECIFIED"
	CancelLeaseRequestResponseViewEnumBasic           CancelLeaseRequestResponseViewEnum = "BASIC"
	CancelLeaseRequestResponseViewEnumFull            CancelLeaseRequestResponseViewEnum = "FULL"
)

type CancelLeaseRequest struct {
	ResponseView *CancelLeaseRequestResponseViewEnum `json:"responseView"`
	ScheduleTime *string                             `json:"scheduleTime"`
}
