package shared

// Pipeline
// Specifies a series of actions to execute, expressed as Docker containers.
type Pipeline struct {
	Actions              []Action          `json:"actions,omitempty"`
	EncryptedEnvironment *Secret           `json:"encryptedEnvironment,omitempty"`
	Environment          map[string]string `json:"environment,omitempty"`
	Resources            *Resources        `json:"resources,omitempty"`
	Timeout              *string           `json:"timeout,omitempty"`
}
