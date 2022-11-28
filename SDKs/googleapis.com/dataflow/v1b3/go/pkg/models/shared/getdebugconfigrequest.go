package shared

// GetDebugConfigRequest
// Request to get updated debug configuration for component.
type GetDebugConfigRequest struct {
	ComponentID *string `json:"componentId,omitempty"`
	Location    *string `json:"location,omitempty"`
	WorkerID    *string `json:"workerId,omitempty"`
}
