package shared

type ComputeEngineTargetDetailsBootOptionEnum string

const (
	ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionUnspecified ComputeEngineTargetDetailsBootOptionEnum = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"
	ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionEfi         ComputeEngineTargetDetailsBootOptionEnum = "COMPUTE_ENGINE_BOOT_OPTION_EFI"
	ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionBios        ComputeEngineTargetDetailsBootOptionEnum = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
)

type ComputeEngineTargetDetailsDiskTypeEnum string

const (
	ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeUnspecified ComputeEngineTargetDetailsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
	ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeStandard    ComputeEngineTargetDetailsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
	ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeSsd         ComputeEngineTargetDetailsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_SSD"
	ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeBalanced    ComputeEngineTargetDetailsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
)

type ComputeEngineTargetDetailsLicenseTypeEnum string

const (
	ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypeDefault ComputeEngineTargetDetailsLicenseTypeEnum = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
	ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypePayg    ComputeEngineTargetDetailsLicenseTypeEnum = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
	ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypeByol    ComputeEngineTargetDetailsLicenseTypeEnum = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
)

type ComputeEngineTargetDetails struct {
	AdditionalLicenses []string                                   `json:"additionalLicenses"`
	AppliedLicense     *AppliedLicense                            `json:"appliedLicense"`
	BootOption         *ComputeEngineTargetDetailsBootOptionEnum  `json:"bootOption"`
	ComputeScheduling  *ComputeScheduling                         `json:"computeScheduling"`
	DiskType           *ComputeEngineTargetDetailsDiskTypeEnum    `json:"diskType"`
	Hostname           *string                                    `json:"hostname"`
	Labels             map[string]string                          `json:"labels"`
	LicenseType        *ComputeEngineTargetDetailsLicenseTypeEnum `json:"licenseType"`
	MachineType        *string                                    `json:"machineType"`
	MachineTypeSeries  *string                                    `json:"machineTypeSeries"`
	Metadata           map[string]string                          `json:"metadata"`
	NetworkInterfaces  []NetworkInterface                         `json:"networkInterfaces"`
	NetworkTags        []string                                   `json:"networkTags"`
	Project            *string                                    `json:"project"`
	SecureBoot         *bool                                      `json:"secureBoot"`
	ServiceAccount     *string                                    `json:"serviceAccount"`
	VMName             *string                                    `json:"vmName"`
	Zone               *string                                    `json:"zone"`
}
