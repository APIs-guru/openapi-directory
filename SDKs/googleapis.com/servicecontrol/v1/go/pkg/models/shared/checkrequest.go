package shared



type CheckRequest struct {
    Operation *Operation `json:"operation,omitempty"`
    RequestProjectSettings *bool `json:"requestProjectSettings,omitempty"`
    ServiceConfigID *string `json:"serviceConfigId,omitempty"`
    SkipActivationCheck *bool `json:"skipActivationCheck,omitempty"`
    
}

