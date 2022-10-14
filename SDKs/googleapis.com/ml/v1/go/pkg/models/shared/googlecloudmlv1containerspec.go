package shared

type GoogleCloudMlV1ContainerSpec struct {
	Args    []string                       `json:"args,omitempty"`
	Command []string                       `json:"command,omitempty"`
	Env     []GoogleCloudMlV1EnvVar        `json:"env,omitempty"`
	Image   *string                        `json:"image,omitempty"`
	Ports   []GoogleCloudMlV1ContainerPort `json:"ports,omitempty"`
}
