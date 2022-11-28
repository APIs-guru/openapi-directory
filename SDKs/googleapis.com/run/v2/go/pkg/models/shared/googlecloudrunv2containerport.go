package shared

// GoogleCloudRunV2ContainerPort
// ContainerPort represents a network port in a single container.
type GoogleCloudRunV2ContainerPort struct {
	ContainerPort *int32  `json:"containerPort,omitempty"`
	Name          *string `json:"name,omitempty"`
}
