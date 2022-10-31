package shared



type ReportRuntimeEventRequest struct {
    Event *Event `json:"event,omitempty"`
    VMID *string `json:"vmId,omitempty"`
    
}

