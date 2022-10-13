package shared

type GoogleCloudMlV1ReplicaConfig struct {
	AcceleratorConfig *GoogleCloudMlV1AcceleratorConfig `json:"acceleratorConfig"`
	ContainerArgs     []string                          `json:"containerArgs"`
	ContainerCommand  []string                          `json:"containerCommand"`
	DiskConfig        *GoogleCloudMlV1DiskConfig        `json:"diskConfig"`
	ImageURI          *string                           `json:"imageUri"`
	TpuTfVersion      *string                           `json:"tpuTfVersion"`
}
