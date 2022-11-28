package shared

// GoogleCloudRunV2Container
// A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
type GoogleCloudRunV2Container struct {
	Args          []string                              `json:"args,omitempty"`
	Command       []string                              `json:"command,omitempty"`
	Env           []GoogleCloudRunV2EnvVar              `json:"env,omitempty"`
	Image         *string                               `json:"image,omitempty"`
	LivenessProbe *GoogleCloudRunV2Probe                `json:"livenessProbe,omitempty"`
	Name          *string                               `json:"name,omitempty"`
	Ports         []GoogleCloudRunV2ContainerPort       `json:"ports,omitempty"`
	Resources     *GoogleCloudRunV2ResourceRequirements `json:"resources,omitempty"`
	StartupProbe  *GoogleCloudRunV2Probe                `json:"startupProbe,omitempty"`
	VolumeMounts  []GoogleCloudRunV2VolumeMount         `json:"volumeMounts,omitempty"`
	WorkingDir    *string                               `json:"workingDir,omitempty"`
}
