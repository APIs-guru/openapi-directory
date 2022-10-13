package shared

type GoogleCloudRunV2ContainerPort struct {
	ContainerPort *int32  `json:"containerPort"`
	Name          *string `json:"name"`
}
