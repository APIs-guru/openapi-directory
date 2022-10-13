package shared

type GoogleCloudRunV2Container struct {
	Args          []string                              `json:"args"`
	Command       []string                              `json:"command"`
	Env           []GoogleCloudRunV2EnvVar              `json:"env"`
	Image         *string                               `json:"image"`
	LivenessProbe *GoogleCloudRunV2Probe                `json:"livenessProbe"`
	Name          *string                               `json:"name"`
	Ports         []GoogleCloudRunV2ContainerPort       `json:"ports"`
	Resources     *GoogleCloudRunV2ResourceRequirements `json:"resources"`
	StartupProbe  *GoogleCloudRunV2Probe                `json:"startupProbe"`
	VolumeMounts  []GoogleCloudRunV2VolumeMount         `json:"volumeMounts"`
	WorkingDir    *string                               `json:"workingDir"`
}
