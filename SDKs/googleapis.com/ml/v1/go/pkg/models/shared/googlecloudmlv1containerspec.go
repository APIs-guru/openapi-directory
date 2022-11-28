package shared

// GoogleCloudMlV1ContainerSpec
// Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
type GoogleCloudMlV1ContainerSpec struct {
	Args    []string                       `json:"args,omitempty"`
	Command []string                       `json:"command,omitempty"`
	Env     []GoogleCloudMlV1EnvVar        `json:"env,omitempty"`
	Image   *string                        `json:"image,omitempty"`
	Ports   []GoogleCloudMlV1ContainerPort `json:"ports,omitempty"`
}
