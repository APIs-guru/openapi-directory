package shared

type GetDebugConfigRequest struct {
	ComponentID *string `json:"componentId"`
	Location    *string `json:"location"`
	WorkerID    *string `json:"workerId"`
}
