package shared

// AcceleratorConfig
// AcceleratorConfig represents a Hardware Accelerator request.
type AcceleratorConfig struct {
	AcceleratorCount *string           `json:"acceleratorCount,omitempty"`
	AcceleratorType  *string           `json:"acceleratorType,omitempty"`
	GpuPartitionSize *string           `json:"gpuPartitionSize,omitempty"`
	GpuSharingConfig *GpuSharingConfig `json:"gpuSharingConfig,omitempty"`
}
