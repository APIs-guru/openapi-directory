package shared

// GkeNodePoolAcceleratorConfig
// A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.
type GkeNodePoolAcceleratorConfig struct {
	AcceleratorCount *string `json:"acceleratorCount,omitempty"`
	AcceleratorType  *string `json:"acceleratorType,omitempty"`
	GpuPartitionSize *string `json:"gpuPartitionSize,omitempty"`
}
