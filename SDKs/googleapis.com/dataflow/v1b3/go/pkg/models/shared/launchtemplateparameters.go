package shared

// LaunchTemplateParameters
// Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid.
type LaunchTemplateParameters struct {
	Environment          *RuntimeEnvironment `json:"environment,omitempty"`
	JobName              *string             `json:"jobName,omitempty"`
	Parameters           map[string]string   `json:"parameters,omitempty"`
	TransformNameMapping map[string]string   `json:"transformNameMapping,omitempty"`
	Update               *bool               `json:"update,omitempty"`
}
