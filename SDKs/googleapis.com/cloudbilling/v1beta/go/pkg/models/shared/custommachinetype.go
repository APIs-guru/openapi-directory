package shared

type CustomMachineType struct {
	MachineSeries   *string  `json:"machineSeries"`
	MemorySizeGb    *float64 `json:"memorySizeGb"`
	VirtualCPUCount *string  `json:"virtualCpuCount"`
}
