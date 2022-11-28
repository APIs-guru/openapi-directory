package shared

// WorkerDetails
// Information about a worker
type WorkerDetails struct {
	WorkItems  []WorkItemDetails `json:"workItems,omitempty"`
	WorkerName *string           `json:"workerName,omitempty"`
}
