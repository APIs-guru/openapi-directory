package shared

// VMUtilizationInfoInput
// Utilization information of a single VM.
type VMUtilizationInfoInput struct {
	Utilization     *VMUtilizationMetrics `json:"utilization,omitempty"`
	VMID            *string               `json:"vmId,omitempty"`
	VmwareVMDetails *VmwareVMDetailsInput `json:"vmwareVmDetails,omitempty"`
}

// VMUtilizationInfo
// Utilization information of a single VM.
type VMUtilizationInfo struct {
	Utilization     *VMUtilizationMetrics `json:"utilization,omitempty"`
	VMID            *string               `json:"vmId,omitempty"`
	VmwareVMDetails *VmwareVMDetails      `json:"vmwareVmDetails,omitempty"`
}
