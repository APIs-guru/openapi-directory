package shared

type GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime struct {
	ImageVersion   *string           `json:"imageVersion,omitempty"`
	JavaLibraries  []string          `json:"javaLibraries,omitempty"`
	Properties     map[string]string `json:"properties,omitempty"`
	PythonPackages []string          `json:"pythonPackages,omitempty"`
}
