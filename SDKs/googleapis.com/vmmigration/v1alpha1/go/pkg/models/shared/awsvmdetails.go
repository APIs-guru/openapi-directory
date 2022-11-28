package shared

type AwsVMDetailsArchitectureEnum string

const (
	AwsVMDetailsArchitectureEnumVMArchitectureUnspecified AwsVMDetailsArchitectureEnum = "VM_ARCHITECTURE_UNSPECIFIED"
	AwsVMDetailsArchitectureEnumI386                      AwsVMDetailsArchitectureEnum = "I386"
	AwsVMDetailsArchitectureEnumX8664                     AwsVMDetailsArchitectureEnum = "X86_64"
	AwsVMDetailsArchitectureEnumArm64                     AwsVMDetailsArchitectureEnum = "ARM64"
	AwsVMDetailsArchitectureEnumX8664Mac                  AwsVMDetailsArchitectureEnum = "X86_64_MAC"
)

type AwsVMDetailsBootOptionEnum string

const (
	AwsVMDetailsBootOptionEnumBootOptionUnspecified AwsVMDetailsBootOptionEnum = "BOOT_OPTION_UNSPECIFIED"
	AwsVMDetailsBootOptionEnumEfi                   AwsVMDetailsBootOptionEnum = "EFI"
	AwsVMDetailsBootOptionEnumBios                  AwsVMDetailsBootOptionEnum = "BIOS"
)

type AwsVMDetailsPowerStateEnum string

const (
	AwsVMDetailsPowerStateEnumPowerStateUnspecified AwsVMDetailsPowerStateEnum = "POWER_STATE_UNSPECIFIED"
	AwsVMDetailsPowerStateEnumOn                    AwsVMDetailsPowerStateEnum = "ON"
	AwsVMDetailsPowerStateEnumOff                   AwsVMDetailsPowerStateEnum = "OFF"
	AwsVMDetailsPowerStateEnumSuspended             AwsVMDetailsPowerStateEnum = "SUSPENDED"
	AwsVMDetailsPowerStateEnumPending               AwsVMDetailsPowerStateEnum = "PENDING"
)

type AwsVMDetailsVirtualizationTypeEnum string

const (
	AwsVMDetailsVirtualizationTypeEnumVMVirtualizationTypeUnspecified AwsVMDetailsVirtualizationTypeEnum = "VM_VIRTUALIZATION_TYPE_UNSPECIFIED"
	AwsVMDetailsVirtualizationTypeEnumHvm                             AwsVMDetailsVirtualizationTypeEnum = "HVM"
	AwsVMDetailsVirtualizationTypeEnumParavirtual                     AwsVMDetailsVirtualizationTypeEnum = "PARAVIRTUAL"
)

// AwsVMDetails
// AwsVmDetails describes a VM in AWS.
type AwsVMDetails struct {
	Architecture       *AwsVMDetailsArchitectureEnum       `json:"architecture,omitempty"`
	BootOption         *AwsVMDetailsBootOptionEnum         `json:"bootOption,omitempty"`
	CommittedStorageMb *string                             `json:"committedStorageMb,omitempty"`
	CPUCount           *int32                              `json:"cpuCount,omitempty"`
	DiskCount          *int32                              `json:"diskCount,omitempty"`
	DisplayName        *string                             `json:"displayName,omitempty"`
	InstanceType       *string                             `json:"instanceType,omitempty"`
	MemoryMb           *int32                              `json:"memoryMb,omitempty"`
	OsDescription      *string                             `json:"osDescription,omitempty"`
	PowerState         *AwsVMDetailsPowerStateEnum         `json:"powerState,omitempty"`
	SecurityGroups     []AwsSecurityGroup                  `json:"securityGroups,omitempty"`
	SourceDescription  *string                             `json:"sourceDescription,omitempty"`
	SourceID           *string                             `json:"sourceId,omitempty"`
	Tags               map[string]string                   `json:"tags,omitempty"`
	VirtualizationType *AwsVMDetailsVirtualizationTypeEnum `json:"virtualizationType,omitempty"`
	VMID               *string                             `json:"vmId,omitempty"`
	VpcID              *string                             `json:"vpcId,omitempty"`
	Zone               *string                             `json:"zone,omitempty"`
}
