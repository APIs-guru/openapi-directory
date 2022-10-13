package shared

type GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime struct {
	Image          *string           `json:"image"`
	JavaJars       []string          `json:"javaJars"`
	Properties     map[string]string `json:"properties"`
	PythonPackages []string          `json:"pythonPackages"`
}
