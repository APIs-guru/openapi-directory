package shared



type SubmitConfigSourceRequest struct {
    ConfigSource *ConfigSource `json:"configSource,omitempty"`
    ValidateOnly *bool `json:"validateOnly,omitempty"`
    
}

