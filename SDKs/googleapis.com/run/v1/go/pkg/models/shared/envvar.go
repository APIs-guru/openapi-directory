package shared

// EnvVar
// EnvVar represents an environment variable present in a Container.
type EnvVar struct {
	Name      *string       `json:"name,omitempty"`
	Value     *string       `json:"value,omitempty"`
	ValueFrom *EnvVarSource `json:"valueFrom,omitempty"`
}
