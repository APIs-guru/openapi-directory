package shared



type GoogleCloudRunV2ResourceRequirements struct {
    CPUIdle *bool `json:"cpuIdle,omitempty"`
    Limits map[string]string `json:"limits,omitempty"`
    
}

