package shared

type EnvVar struct {
	Name      *string       `json:"name,omitempty"`
	Value     *string       `json:"value,omitempty"`
	ValueFrom *EnvVarSource `json:"valueFrom,omitempty"`
}
