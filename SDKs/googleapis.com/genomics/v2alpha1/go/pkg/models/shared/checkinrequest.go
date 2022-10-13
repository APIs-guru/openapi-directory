package shared

type CheckInRequest struct {
	DeadlineExpired map[string]interface{} `json:"deadlineExpired"`
	Event           map[string]interface{} `json:"event"`
	Events          []TimestampedEvent     `json:"events"`
	Result          *Status                `json:"result"`
	SosReport       *string                `json:"sosReport"`
	WorkerStatus    *WorkerStatus          `json:"workerStatus"`
}
