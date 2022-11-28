package shared

// ContainerPort
// ContainerPort represents a network port in a single container.
type ContainerPort struct {
	ContainerPort *int32  `json:"containerPort,omitempty"`
	Name          *string `json:"name,omitempty"`
	Protocol      *string `json:"protocol,omitempty"`
}
