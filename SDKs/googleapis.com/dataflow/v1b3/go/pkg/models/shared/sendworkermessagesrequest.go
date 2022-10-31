package shared



type SendWorkerMessagesRequest struct {
    Location *string `json:"location,omitempty"`
    WorkerMessages []WorkerMessage `json:"workerMessages,omitempty"`
    
}

