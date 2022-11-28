package shared

// CreateInstanceRequestInput
// The request for CreateInstance.
type CreateInstanceRequestInput struct {
	Instance   *InstanceInput `json:"instance,omitempty"`
	InstanceID *string        `json:"instanceId,omitempty"`
}
