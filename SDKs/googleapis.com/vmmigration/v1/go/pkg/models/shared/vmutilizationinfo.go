package shared

type VMUtilizationInfo struct {
	Utilization     *VMUtilizationMetrics `json:"utilization"`
	VMID            *string               `json:"vmId"`
	VmwareVMDetails *VmwareVMDetails      `json:"vmwareVmDetails"`
}
