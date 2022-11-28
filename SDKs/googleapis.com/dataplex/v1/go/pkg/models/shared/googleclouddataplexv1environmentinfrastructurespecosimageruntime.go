package shared

// GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime
// Software Runtime Configuration to run Analyze.
type GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime struct {
	ImageVersion   *string           `json:"imageVersion,omitempty"`
	JavaLibraries  []string          `json:"javaLibraries,omitempty"`
	Properties     map[string]string `json:"properties,omitempty"`
	PythonPackages []string          `json:"pythonPackages,omitempty"`
}
