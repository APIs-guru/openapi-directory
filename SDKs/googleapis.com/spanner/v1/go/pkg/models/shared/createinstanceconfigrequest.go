package shared



type CreateInstanceConfigRequest struct {
    InstanceConfig *InstanceConfig `json:"instanceConfig,omitempty"`
    InstanceConfigID *string `json:"instanceConfigId,omitempty"`
    ValidateOnly *bool `json:"validateOnly,omitempty"`
    
}

