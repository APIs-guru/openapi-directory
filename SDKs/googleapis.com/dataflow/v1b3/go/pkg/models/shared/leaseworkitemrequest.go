package shared



type LeaseWorkItemRequest struct {
    CurrentWorkerTime *string `json:"currentWorkerTime,omitempty"`
    Location *string `json:"location,omitempty"`
    RequestedLeaseDuration *string `json:"requestedLeaseDuration,omitempty"`
    UnifiedWorkerRequest map[string]interface{} `json:"unifiedWorkerRequest,omitempty"`
    WorkItemTypes []string `json:"workItemTypes,omitempty"`
    WorkerCapabilities []string `json:"workerCapabilities,omitempty"`
    WorkerID *string `json:"workerId,omitempty"`
    
}

