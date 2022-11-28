package shared

// SoftwareConfig
// Specifies the selection and configuration of software inside the environment.
type SoftwareConfig struct {
	AirflowConfigOverrides map[string]string `json:"airflowConfigOverrides,omitempty"`
	EnvVariables           map[string]string `json:"envVariables,omitempty"`
	ImageVersion           *string           `json:"imageVersion,omitempty"`
	PypiPackages           map[string]string `json:"pypiPackages,omitempty"`
	PythonVersion          *string           `json:"pythonVersion,omitempty"`
	SchedulerCount         *int32            `json:"schedulerCount,omitempty"`
}
