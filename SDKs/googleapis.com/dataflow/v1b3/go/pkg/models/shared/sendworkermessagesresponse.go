package shared

// SendWorkerMessagesResponse
// The response to the worker messages.
type SendWorkerMessagesResponse struct {
	WorkerMessageResponses []WorkerMessageResponse `json:"workerMessageResponses,omitempty"`
}
