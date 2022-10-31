package shared




type VmwareVMDetailsBootOptionEnum string

const (
    VmwareVMDetailsBootOptionEnumBootOptionUnspecified VmwareVMDetailsBootOptionEnum = "BOOT_OPTION_UNSPECIFIED"
VmwareVMDetailsBootOptionEnumEfi VmwareVMDetailsBootOptionEnum = "EFI"
VmwareVMDetailsBootOptionEnumBios VmwareVMDetailsBootOptionEnum = "BIOS"
)



type VmwareVMDetailsPowerStateEnum string

const (
    VmwareVMDetailsPowerStateEnumPowerStateUnspecified VmwareVMDetailsPowerStateEnum = "POWER_STATE_UNSPECIFIED"
VmwareVMDetailsPowerStateEnumOn VmwareVMDetailsPowerStateEnum = "ON"
VmwareVMDetailsPowerStateEnumOff VmwareVMDetailsPowerStateEnum = "OFF"
VmwareVMDetailsPowerStateEnumSuspended VmwareVMDetailsPowerStateEnum = "SUSPENDED"
)


type VmwareVMDetails struct {
    BootOption *VmwareVMDetailsBootOptionEnum `json:"bootOption,omitempty"`
    CommittedStorageMb *string `json:"committedStorageMb,omitempty"`
    CPUCount *int32 `json:"cpuCount,omitempty"`
    DatacenterDescription *string `json:"datacenterDescription,omitempty"`
    DatacenterID *string `json:"datacenterId,omitempty"`
    DiskCount *int32 `json:"diskCount,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    GuestDescription *string `json:"guestDescription,omitempty"`
    MemoryMb *int32 `json:"memoryMb,omitempty"`
    PowerState *VmwareVMDetailsPowerStateEnum `json:"powerState,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    VMID *string `json:"vmId,omitempty"`
    
}

