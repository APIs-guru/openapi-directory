package shared

// WorkerShutdownNotice
// Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.
type WorkerShutdownNotice struct {
	Reason *string `json:"reason,omitempty"`
}
