package shared

type GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime struct {
	ImageVersion   *string           `json:"imageVersion"`
	JavaLibraries  []string          `json:"javaLibraries"`
	Properties     map[string]string `json:"properties"`
	PythonPackages []string          `json:"pythonPackages"`
}
