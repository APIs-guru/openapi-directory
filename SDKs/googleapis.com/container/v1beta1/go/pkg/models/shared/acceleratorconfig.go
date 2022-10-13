package shared

type AcceleratorConfig struct {
	AcceleratorCount           *string           `json:"acceleratorCount"`
	AcceleratorType            *string           `json:"acceleratorType"`
	GpuPartitionSize           *string           `json:"gpuPartitionSize"`
	GpuSharingConfig           *GpuSharingConfig `json:"gpuSharingConfig"`
	MaxTimeSharedClientsPerGpu *string           `json:"maxTimeSharedClientsPerGpu"`
}
