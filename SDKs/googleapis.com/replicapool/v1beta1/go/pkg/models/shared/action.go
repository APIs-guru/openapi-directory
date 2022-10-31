package shared



type Action struct {
    Commands []string `json:"commands,omitempty"`
    EnvVariables []EnvVariable `json:"envVariables,omitempty"`
    TimeoutMilliSeconds *int32 `json:"timeoutMilliSeconds,omitempty"`
    
}

