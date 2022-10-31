package shared



type EnvironmentConfig struct {
    ExecutionConfig *ExecutionConfig `json:"executionConfig,omitempty"`
    PeripheralsConfig *PeripheralsConfig `json:"peripheralsConfig,omitempty"`
    
}

