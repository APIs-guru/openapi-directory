package shared

type ListWorkerPoolsResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	WorkerPools   []WorkerPool `json:"workerPools"`
}
