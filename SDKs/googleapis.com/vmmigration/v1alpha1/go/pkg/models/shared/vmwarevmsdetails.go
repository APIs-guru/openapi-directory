package shared

// VmwareVmsDetails
// VmwareVmsDetails describes VMs in vCenter.
type VmwareVmsDetails struct {
	Details []VmwareVMDetails `json:"details,omitempty"`
}
