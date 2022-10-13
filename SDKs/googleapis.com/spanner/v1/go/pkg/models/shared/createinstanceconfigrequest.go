package shared

type CreateInstanceConfigRequest struct {
	InstanceConfig   *InstanceConfig `json:"instanceConfig"`
	InstanceConfigID *string         `json:"instanceConfigId"`
	ValidateOnly     *bool           `json:"validateOnly"`
}
