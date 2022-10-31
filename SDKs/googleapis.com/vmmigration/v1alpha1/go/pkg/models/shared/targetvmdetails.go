package shared

type TargetVMDetailsBootOptionEnum string

const (
	TargetVMDetailsBootOptionEnumBootOptionUnspecified TargetVMDetailsBootOptionEnum = "BOOT_OPTION_UNSPECIFIED"
	TargetVMDetailsBootOptionEnumEfi                   TargetVMDetailsBootOptionEnum = "EFI"
	TargetVMDetailsBootOptionEnumBios                  TargetVMDetailsBootOptionEnum = "BIOS"
)

type TargetVMDetailsDiskTypeEnum string

const (
	TargetVMDetailsDiskTypeEnumDiskTypeUnspecified TargetVMDetailsDiskTypeEnum = "DISK_TYPE_UNSPECIFIED"
	TargetVMDetailsDiskTypeEnumStandard            TargetVMDetailsDiskTypeEnum = "STANDARD"
	TargetVMDetailsDiskTypeEnumBalanced            TargetVMDetailsDiskTypeEnum = "BALANCED"
	TargetVMDetailsDiskTypeEnumSsd                 TargetVMDetailsDiskTypeEnum = "SSD"
)

type TargetVMDetailsLicenseTypeEnum string

const (
	TargetVMDetailsLicenseTypeEnumDefault TargetVMDetailsLicenseTypeEnum = "DEFAULT"
	TargetVMDetailsLicenseTypeEnumPayg    TargetVMDetailsLicenseTypeEnum = "PAYG"
	TargetVMDetailsLicenseTypeEnumByol    TargetVMDetailsLicenseTypeEnum = "BYOL"
)

type TargetVMDetails struct {
	AppliedLicense    *AppliedLicense                 `json:"appliedLicense,omitempty"`
	BootOption        *TargetVMDetailsBootOptionEnum  `json:"bootOption,omitempty"`
	ComputeScheduling *ComputeScheduling              `json:"computeScheduling,omitempty"`
	DiskType          *TargetVMDetailsDiskTypeEnum    `json:"diskType,omitempty"`
	ExternalIP        *string                         `json:"externalIp,omitempty"`
	InternalIP        *string                         `json:"internalIp,omitempty"`
	Labels            map[string]string               `json:"labels,omitempty"`
	LicenseType       *TargetVMDetailsLicenseTypeEnum `json:"licenseType,omitempty"`
	MachineType       *string                         `json:"machineType,omitempty"`
	MachineTypeSeries *string                         `json:"machineTypeSeries,omitempty"`
	Metadata          map[string]string               `json:"metadata,omitempty"`
	Name              *string                         `json:"name,omitempty"`
	Network           *string                         `json:"network,omitempty"`
	NetworkInterfaces []NetworkInterface              `json:"networkInterfaces,omitempty"`
	NetworkTags       []string                        `json:"networkTags,omitempty"`
	Project           *string                         `json:"project,omitempty"`
	SecureBoot        *bool                           `json:"secureBoot,omitempty"`
	ServiceAccount    *string                         `json:"serviceAccount,omitempty"`
	Subnetwork        *string                         `json:"subnetwork,omitempty"`
	TargetProject     *string                         `json:"targetProject,omitempty"`
	Zone              *string                         `json:"zone,omitempty"`
}
