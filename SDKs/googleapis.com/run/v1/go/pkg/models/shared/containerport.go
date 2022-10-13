package shared

type ContainerPort struct {
	ContainerPort *int32  `json:"containerPort"`
	Name          *string `json:"name"`
	Protocol      *string `json:"protocol"`
}
