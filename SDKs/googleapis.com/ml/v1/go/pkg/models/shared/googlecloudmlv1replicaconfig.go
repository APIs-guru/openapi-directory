package shared

type GoogleCloudMlV1ReplicaConfig struct {
	AcceleratorConfig *GoogleCloudMlV1AcceleratorConfig `json:"acceleratorConfig,omitempty"`
	ContainerArgs     []string                          `json:"containerArgs,omitempty"`
	ContainerCommand  []string                          `json:"containerCommand,omitempty"`
	DiskConfig        *GoogleCloudMlV1DiskConfig        `json:"diskConfig,omitempty"`
	ImageURI          *string                           `json:"imageUri,omitempty"`
	TpuTfVersion      *string                           `json:"tpuTfVersion,omitempty"`
}
