package shared

// UpdateInstanceConfigRequest
// Request for updating instance configurations.
type UpdateInstanceConfigRequest struct {
	Config *InstanceConfig `json:"config,omitempty"`
}
