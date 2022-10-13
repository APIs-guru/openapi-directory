package shared

type ReportRuntimeEventRequest struct {
	Event *Event  `json:"event"`
	VMID  *string `json:"vmId"`
}
