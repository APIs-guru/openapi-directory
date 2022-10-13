package shared

type SendWorkerMessagesRequest struct {
	Location       *string         `json:"location"`
	WorkerMessages []WorkerMessage `json:"workerMessages"`
}
