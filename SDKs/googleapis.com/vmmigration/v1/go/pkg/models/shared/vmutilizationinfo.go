package shared



type VMUtilizationInfo struct {
    Utilization *VMUtilizationMetrics `json:"utilization,omitempty"`
    VMID *string `json:"vmId,omitempty"`
    VmwareVMDetails *VmwareVMDetails `json:"vmwareVmDetails,omitempty"`
    
}

