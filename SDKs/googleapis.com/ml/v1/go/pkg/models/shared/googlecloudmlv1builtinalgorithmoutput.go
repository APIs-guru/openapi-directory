package shared

type GoogleCloudMlV1BuiltInAlgorithmOutput struct {
	Framework      *string `json:"framework,omitempty"`
	ModelPath      *string `json:"modelPath,omitempty"`
	PythonVersion  *string `json:"pythonVersion,omitempty"`
	RuntimeVersion *string `json:"runtimeVersion,omitempty"`
}
