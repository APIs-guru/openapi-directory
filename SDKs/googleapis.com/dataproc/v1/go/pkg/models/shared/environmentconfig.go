package shared

type EnvironmentConfig struct {
	ExecutionConfig   *ExecutionConfig   `json:"executionConfig"`
	PeripheralsConfig *PeripheralsConfig `json:"peripheralsConfig"`
}
