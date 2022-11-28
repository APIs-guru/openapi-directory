package shared

// ReportRuntimeEventRequest
// Request for reporting a Managed Notebook Event.
type ReportRuntimeEventRequest struct {
	Event *Event  `json:"event,omitempty"`
	VMID  *string `json:"vmId,omitempty"`
}
