package shared

type WorkerDetails struct {
	WorkItems  []WorkItemDetails `json:"workItems"`
	WorkerName *string           `json:"workerName"`
}
