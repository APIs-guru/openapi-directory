package shared

type GoogleCloudMlV1BuiltInAlgorithmOutput struct {
	Framework      *string `json:"framework"`
	ModelPath      *string `json:"modelPath"`
	PythonVersion  *string `json:"pythonVersion"`
	RuntimeVersion *string `json:"runtimeVersion"`
}
