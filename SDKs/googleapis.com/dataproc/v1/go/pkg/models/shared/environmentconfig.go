package shared

// EnvironmentConfig
// Environment configuration for a workload.
type EnvironmentConfig struct {
	ExecutionConfig   *ExecutionConfig   `json:"executionConfig,omitempty"`
	PeripheralsConfig *PeripheralsConfig `json:"peripheralsConfig,omitempty"`
}
