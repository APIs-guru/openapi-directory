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
	AdditionalLicenses []string                                    `json:"additionalLicenses"`
	AppliedLicense     *AppliedLicense                             `json:"appliedLicense"`
	BootOption         *ComputeEngineTargetDefaultsBootOptionEnum  `json:"bootOption"`
	ComputeScheduling  *ComputeScheduling                          `json:"computeScheduling"`
	DiskType           *ComputeEngineTargetDefaultsDiskTypeEnum    `json:"diskType"`
	Hostname           *string                                     `json:"hostname"`
	Labels             map[string]string                           `json:"labels"`
	LicenseType        *ComputeEngineTargetDefaultsLicenseTypeEnum `json:"licenseType"`
	MachineType        *string                                     `json:"machineType"`
	MachineTypeSeries  *string                                     `json:"machineTypeSeries"`
	Metadata           map[string]string                           `json:"metadata"`
	NetworkInterfaces  []NetworkInterface                          `json:"networkInterfaces"`
	NetworkTags        []string                                    `json:"networkTags"`
	SecureBoot         *bool                                       `json:"secureBoot"`
	ServiceAccount     *string                                     `json:"serviceAccount"`
	TargetProject      *string                                     `json:"targetProject"`
	VMName             *string                                     `json:"vmName"`
	Zone               *string                                     `json:"zone"`
}
