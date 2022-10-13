package shared

type GkeNodeConfig struct {
	Accelerators   []GkeNodePoolAcceleratorConfig `json:"accelerators"`
	BootDiskKmsKey *string                        `json:"bootDiskKmsKey"`
	LocalSsdCount  *int32                         `json:"localSsdCount"`
	MachineType    *string                        `json:"machineType"`
	MinCPUPlatform *string                        `json:"minCpuPlatform"`
	Preemptible    *bool                          `json:"preemptible"`
	Spot           *bool                          `json:"spot"`
}
