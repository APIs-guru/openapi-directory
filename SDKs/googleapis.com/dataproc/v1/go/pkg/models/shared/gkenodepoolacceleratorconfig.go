package shared

type GkeNodePoolAcceleratorConfig struct {
	AcceleratorCount *string `json:"acceleratorCount"`
	AcceleratorType  *string `json:"acceleratorType"`
	GpuPartitionSize *string `json:"gpuPartitionSize"`
}
