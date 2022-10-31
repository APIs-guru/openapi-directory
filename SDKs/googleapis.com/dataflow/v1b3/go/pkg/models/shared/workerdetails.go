package shared



type WorkerDetails struct {
    WorkItems []WorkItemDetails `json:"workItems,omitempty"`
    WorkerName *string `json:"workerName,omitempty"`
    
}

