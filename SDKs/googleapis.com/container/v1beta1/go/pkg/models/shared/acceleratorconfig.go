package shared

type AcceleratorConfig struct {
	AcceleratorCount           *string           `json:"acceleratorCount,omitempty"`
	AcceleratorType            *string           `json:"acceleratorType,omitempty"`
	GpuPartitionSize           *string           `json:"gpuPartitionSize,omitempty"`
	GpuSharingConfig           *GpuSharingConfig `json:"gpuSharingConfig,omitempty"`
	MaxTimeSharedClientsPerGpu *string           `json:"maxTimeSharedClientsPerGpu,omitempty"`
}
