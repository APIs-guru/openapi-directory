package shared

// ListWorkerPoolsResponse
// Response containing existing `WorkerPools`.
type ListWorkerPoolsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	WorkerPools   []WorkerPool `json:"workerPools,omitempty"`
}
