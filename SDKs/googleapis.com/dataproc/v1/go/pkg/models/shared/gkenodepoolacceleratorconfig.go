package shared

type GkeNodePoolAcceleratorConfig struct {
	AcceleratorCount *string `json:"acceleratorCount,omitempty"`
	AcceleratorType  *string `json:"acceleratorType,omitempty"`
	GpuPartitionSize *string `json:"gpuPartitionSize,omitempty"`
}
