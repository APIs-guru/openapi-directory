package shared

type VmwareVMDetailsBootOptionEnum string

const (
	VmwareVMDetailsBootOptionEnumBootOptionUnspecified VmwareVMDetailsBootOptionEnum = "BOOT_OPTION_UNSPECIFIED"
	VmwareVMDetailsBootOptionEnumEfi                   VmwareVMDetailsBootOptionEnum = "EFI"
	VmwareVMDetailsBootOptionEnumBios                  VmwareVMDetailsBootOptionEnum = "BIOS"
)

type VmwareVMDetailsPowerStateEnum string

const (
	VmwareVMDetailsPowerStateEnumPowerStateUnspecified VmwareVMDetailsPowerStateEnum = "POWER_STATE_UNSPECIFIED"
	VmwareVMDetailsPowerStateEnumOn                    VmwareVMDetailsPowerStateEnum = "ON"
	VmwareVMDetailsPowerStateEnumOff                   VmwareVMDetailsPowerStateEnum = "OFF"
	VmwareVMDetailsPowerStateEnumSuspended             VmwareVMDetailsPowerStateEnum = "SUSPENDED"
)

type VmwareVMDetails struct {
	BootOption            *VmwareVMDetailsBootOptionEnum `json:"bootOption"`
	CommittedStorage      *string                        `json:"committedStorage"`
	CommittedStorageMb    *string                        `json:"committedStorageMb"`
	CPUCount              *int32                         `json:"cpuCount"`
	DatacenterDescription *string                        `json:"datacenterDescription"`
	DatacenterID          *string                        `json:"datacenterId"`
	DiskCount             *int32                         `json:"diskCount"`
	DisplayName           *string                        `json:"displayName"`
	GuestDescription      *string                        `json:"guestDescription"`
	MemoryMb              *int32                         `json:"memoryMb"`
	PowerState            *VmwareVMDetailsPowerStateEnum `json:"powerState"`
	UUID                  *string                        `json:"uuid"`
	VMID                  *string                        `json:"vmId"`
}
