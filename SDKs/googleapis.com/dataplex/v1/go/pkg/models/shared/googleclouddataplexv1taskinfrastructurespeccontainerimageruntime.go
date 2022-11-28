package shared

// GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime
// Container Image Runtime Configuration used with Batch execution.
type GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime struct {
	Image          *string           `json:"image,omitempty"`
	JavaJars       []string          `json:"javaJars,omitempty"`
	Properties     map[string]string `json:"properties,omitempty"`
	PythonPackages []string          `json:"pythonPackages,omitempty"`
}
