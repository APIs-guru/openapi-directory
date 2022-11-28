package shared

// ListWorkerPoolsResponse
// Response containing existing `WorkerPools`.
type ListWorkerPoolsResponse struct {
	WorkerPools []WorkerPool `json:"workerPools,omitempty"`
}
