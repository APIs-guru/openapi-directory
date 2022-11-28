package shared

// GoogleCloudRunV2EnvVar
// EnvVar represents an environment variable present in a Container.
type GoogleCloudRunV2EnvVar struct {
	Name        *string                       `json:"name,omitempty"`
	Value       *string                       `json:"value,omitempty"`
	ValueSource *GoogleCloudRunV2EnvVarSource `json:"valueSource,omitempty"`
}
