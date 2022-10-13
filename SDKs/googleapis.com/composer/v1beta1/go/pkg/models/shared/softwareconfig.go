package shared

type SoftwareConfig struct {
	AirflowConfigOverrides map[string]string `json:"airflowConfigOverrides"`
	EnvVariables           map[string]string `json:"envVariables"`
	ImageVersion           *string           `json:"imageVersion"`
	PypiPackages           map[string]string `json:"pypiPackages"`
	PythonVersion          *string           `json:"pythonVersion"`
	SchedulerCount         *int32            `json:"schedulerCount"`
}
