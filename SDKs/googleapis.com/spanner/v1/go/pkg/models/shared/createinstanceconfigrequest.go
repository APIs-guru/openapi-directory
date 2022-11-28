package shared

// CreateInstanceConfigRequestInput
// The request for CreateInstanceConfigRequest.
type CreateInstanceConfigRequestInput struct {
	InstanceConfig   *InstanceConfigInput `json:"instanceConfig,omitempty"`
	InstanceConfigID *string              `json:"instanceConfigId,omitempty"`
	ValidateOnly     *bool                `json:"validateOnly,omitempty"`
}
