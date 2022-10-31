package shared

type ListWorkerPoolsResponse struct {
	WorkerPools []WorkerPool `json:"workerPools,omitempty"`
}
