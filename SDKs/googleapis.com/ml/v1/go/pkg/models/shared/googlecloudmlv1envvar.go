package shared

// GoogleCloudMlV1EnvVar
// Represents an environment variable to be made available in a container. This message is a subset of the [Kubernetes EnvVar v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#envvar-v1-core).
type GoogleCloudMlV1EnvVar struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
