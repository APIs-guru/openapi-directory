package shared

// GkeNodeConfig
// Parameters that describe cluster nodes.
type GkeNodeConfig struct {
	Accelerators   []GkeNodePoolAcceleratorConfig `json:"accelerators,omitempty"`
	BootDiskKmsKey *string                        `json:"bootDiskKmsKey,omitempty"`
	LocalSsdCount  *int32                         `json:"localSsdCount,omitempty"`
	MachineType    *string                        `json:"machineType,omitempty"`
	MinCPUPlatform *string                        `json:"minCpuPlatform,omitempty"`
	Preemptible    *bool                          `json:"preemptible,omitempty"`
	Spot           *bool                          `json:"spot,omitempty"`
}
