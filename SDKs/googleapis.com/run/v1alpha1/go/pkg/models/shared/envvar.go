package shared

type EnvVar struct {
	Name      *string       `json:"name"`
	Value     *string       `json:"value"`
	ValueFrom *EnvVarSource `json:"valueFrom"`
}
