package shared



type ListWorkerPoolsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    WorkerPools []WorkerPool `json:"workerPools,omitempty"`
    
}

