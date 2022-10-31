package shared



type CheckInRequest struct {
    DeadlineExpired map[string]interface{} `json:"deadlineExpired,omitempty"`
    Event map[string]interface{} `json:"event,omitempty"`
    Events []TimestampedEvent `json:"events,omitempty"`
    Result *Status `json:"result,omitempty"`
    SosReport *string `json:"sosReport,omitempty"`
    WorkerStatus *WorkerStatus `json:"workerStatus,omitempty"`
    
}

