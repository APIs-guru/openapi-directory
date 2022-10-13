package shared

type GoogleCloudMlV1ContainerSpec struct {
	Args    []string                       `json:"args"`
	Command []string                       `json:"command"`
	Env     []GoogleCloudMlV1EnvVar        `json:"env"`
	Image   *string                        `json:"image"`
	Ports   []GoogleCloudMlV1ContainerPort `json:"ports"`
}
