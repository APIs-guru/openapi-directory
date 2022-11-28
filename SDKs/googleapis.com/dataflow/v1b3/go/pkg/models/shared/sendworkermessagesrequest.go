package shared

// SendWorkerMessagesRequest
// A request for sending worker messages to the service.
type SendWorkerMessagesRequest struct {
	Location       *string         `json:"location,omitempty"`
	WorkerMessages []WorkerMessage `json:"workerMessages,omitempty"`
}
