package shared

type GoogleCloudRunV2EnvVar struct {
	Name        *string                       `json:"name,omitempty"`
	Value       *string                       `json:"value,omitempty"`
	ValueSource *GoogleCloudRunV2EnvVarSource `json:"valueSource,omitempty"`
}
