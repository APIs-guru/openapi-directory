package shared

type LeaseWorkItemRequest struct {
	CurrentWorkerTime      *string                `json:"currentWorkerTime"`
	Location               *string                `json:"location"`
	RequestedLeaseDuration *string                `json:"requestedLeaseDuration"`
	UnifiedWorkerRequest   map[string]interface{} `json:"unifiedWorkerRequest"`
	WorkItemTypes          []string               `json:"workItemTypes"`
	WorkerCapabilities     []string               `json:"workerCapabilities"`
	WorkerID               *string                `json:"workerId"`
}
