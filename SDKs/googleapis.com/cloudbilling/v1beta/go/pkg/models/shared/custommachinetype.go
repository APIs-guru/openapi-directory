package shared



type CustomMachineType struct {
    MachineSeries *string `json:"machineSeries,omitempty"`
    MemorySizeGb *float64 `json:"memorySizeGb,omitempty"`
    VirtualCPUCount *string `json:"virtualCpuCount,omitempty"`
    
}

