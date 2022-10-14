package shared

type ComputeEngineTargetDefaultsBootOptionEnum string

const (
	ComputeEngineTargetDefaultsBootOptionEnumComputeEngineBootOptionUnspecified ComputeEngineTargetDefaultsBootOptionEnum = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"
	ComputeEngineTargetDefaultsBootOptionEnumComputeEngineBootOptionEfi         ComputeEngineTargetDefaultsBootOptionEnum = "COMPUTE_ENGINE_BOOT_OPTION_EFI"
	ComputeEngineTargetDefaultsBootOptionEnumComputeEngineBootOptionBios        ComputeEngineTargetDefaultsBootOptionEnum = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
)

type ComputeEngineTargetDefaultsDiskTypeEnum string

const (
	ComputeEngineTargetDefaultsDiskTypeEnumComputeEngineDiskTypeUnspecified ComputeEngineTargetDefaultsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
	ComputeEngineTargetDefaultsDiskTypeEnumComputeEngineDiskTypeStandard    ComputeEngineTargetDefaultsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
	ComputeEngineTargetDefaultsDiskTypeEnumComputeEngineDiskTypeSsd         ComputeEngineTargetDefaultsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_SSD"
	ComputeEngineTargetDefaultsDiskTypeEnumComputeEngineDiskTypeBalanced    ComputeEngineTargetDefaultsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
)

type ComputeEngineTargetDefaultsLicenseTypeEnum string

const (
	ComputeEngineTargetDefaultsLicenseTypeEnumComputeEngineLicenseTypeDefault ComputeEngineTargetDefaultsLicenseTypeEnum = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
	ComputeEngineTargetDefaultsLicenseTypeEnumComputeEngineLicenseTypePayg    ComputeEngineTargetDefaultsLicenseTypeEnum = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
	ComputeEngineTargetDefaultsLicenseTypeEnumComputeEngineLicenseTypeByol    ComputeEngineTargetDefaultsLicenseTypeEnum = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
)

type ComputeEngineTargetDefaults struct {
	AdditionalLicenses []string                                    `json:"additionalLicenses,omitempty"`
	AppliedLicense     *AppliedLicense                             `json:"appliedLicense,omitempty"`
	BootOption         *ComputeEngineTargetDefaultsBootOptionEnum  `json:"bootOption,omitempty"`
	ComputeScheduling  *ComputeScheduling                          `json:"computeScheduling,omitempty"`
	DiskType           *ComputeEngineTargetDefaultsDiskTypeEnum    `json:"diskType,omitempty"`
	Hostname           *string                                     `json:"hostname,omitempty"`
	Labels             map[string]string                           `json:"labels,omitempty"`
	LicenseType        *ComputeEngineTargetDefaultsLicenseTypeEnum `json:"licenseType,omitempty"`
	MachineType        *string                                     `json:"machineType,omitempty"`
	MachineTypeSeries  *string                                     `json:"machineTypeSeries,omitempty"`
	Metadata           map[string]string                           `json:"metadata,omitempty"`
	NetworkInterfaces  []NetworkInterface                          `json:"networkInterfaces,omitempty"`
	NetworkTags        []string                                    `json:"networkTags,omitempty"`
	SecureBoot         *bool                                       `json:"secureBoot,omitempty"`
	ServiceAccount     *string                                     `json:"serviceAccount,omitempty"`
	TargetProject      *string                                     `json:"targetProject,omitempty"`
	VMName             *string                                     `json:"vmName,omitempty"`
	Zone               *string                                     `json:"zone,omitempty"`
}
