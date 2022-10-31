package shared

type GetDebugConfigRequest struct {
	ComponentID *string `json:"componentId,omitempty"`
	Location    *string `json:"location,omitempty"`
	WorkerID    *string `json:"workerId,omitempty"`
}
