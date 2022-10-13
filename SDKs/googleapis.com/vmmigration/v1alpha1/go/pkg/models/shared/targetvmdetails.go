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
	AppliedLicense    *AppliedLicense                 `json:"appliedLicense"`
	BootOption        *TargetVMDetailsBootOptionEnum  `json:"bootOption"`
	ComputeScheduling *ComputeScheduling              `json:"computeScheduling"`
	DiskType          *TargetVMDetailsDiskTypeEnum    `json:"diskType"`
	ExternalIP        *string                         `json:"externalIp"`
	InternalIP        *string                         `json:"internalIp"`
	Labels            map[string]string               `json:"labels"`
	LicenseType       *TargetVMDetailsLicenseTypeEnum `json:"licenseType"`
	MachineType       *string                         `json:"machineType"`
	MachineTypeSeries *string                         `json:"machineTypeSeries"`
	Metadata          map[string]string               `json:"metadata"`
	Name              *string                         `json:"name"`
	Network           *string                         `json:"network"`
	NetworkInterfaces []NetworkInterface              `json:"networkInterfaces"`
	NetworkTags       []string                        `json:"networkTags"`
	Project           *string                         `json:"project"`
	SecureBoot        *bool                           `json:"secureBoot"`
	ServiceAccount    *string                         `json:"serviceAccount"`
	Subnetwork        *string                         `json:"subnetwork"`
	TargetProject     *string                         `json:"targetProject"`
	Zone              *string                         `json:"zone"`
}
