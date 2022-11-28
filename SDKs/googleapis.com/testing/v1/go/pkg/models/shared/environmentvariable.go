package shared

// EnvironmentVariable
// A key-value pair passed as an environment variable to the test.
type EnvironmentVariable struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
