package shared

// GoogleCloudMlV1BuiltInAlgorithmOutput
// Represents output related to a built-in algorithm Job.
type GoogleCloudMlV1BuiltInAlgorithmOutput struct {
	Framework      *string `json:"framework,omitempty"`
	ModelPath      *string `json:"modelPath,omitempty"`
	PythonVersion  *string `json:"pythonVersion,omitempty"`
	RuntimeVersion *string `json:"runtimeVersion,omitempty"`
}
