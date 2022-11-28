package shared

// GoogleCloudMlV1ContainerPort
// Represents a network port in a single container. This message is a subset of the [Kubernetes ContainerPort v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#containerport-v1-core).
type GoogleCloudMlV1ContainerPort struct {
	ContainerPort *int32 `json:"containerPort,omitempty"`
}
