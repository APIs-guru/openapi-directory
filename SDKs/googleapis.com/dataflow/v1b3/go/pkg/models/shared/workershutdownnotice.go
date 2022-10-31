package shared

type WorkerShutdownNotice struct {
	Reason *string `json:"reason,omitempty"`
}
