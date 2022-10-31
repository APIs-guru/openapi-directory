package shared




type ComputeEngineTargetDetailsBootOptionEnum string

const (
    ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionUnspecified ComputeEngineTargetDetailsBootOptionEnum = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"
ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionEfi ComputeEngineTargetDetailsBootOptionEnum = "COMPUTE_ENGINE_BOOT_OPTION_EFI"
ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionBios ComputeEngineTargetDetailsBootOptionEnum = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
)



type ComputeEngineTargetDetailsDiskTypeEnum string

const (
    ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeUnspecified ComputeEngineTargetDetailsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeStandard ComputeEngineTargetDetailsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeSsd ComputeEngineTargetDetailsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_SSD"
ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeBalanced ComputeEngineTargetDetailsDiskTypeEnum = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
)



type ComputeEngineTargetDetailsLicenseTypeEnum string

const (
    ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypeDefault ComputeEngineTargetDetailsLicenseTypeEnum = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypePayg ComputeEngineTargetDetailsLicenseTypeEnum = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypeByol ComputeEngineTargetDetailsLicenseTypeEnum = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
)


type ComputeEngineTargetDetails struct {
    AdditionalLicenses []string `json:"additionalLicenses,omitempty"`
    AppliedLicense *AppliedLicense `json:"appliedLicense,omitempty"`
    BootOption *ComputeEngineTargetDetailsBootOptionEnum `json:"bootOption,omitempty"`
    ComputeScheduling *ComputeScheduling `json:"computeScheduling,omitempty"`
    DiskType *ComputeEngineTargetDetailsDiskTypeEnum `json:"diskType,omitempty"`
    Hostname *string `json:"hostname,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LicenseType *ComputeEngineTargetDetailsLicenseTypeEnum `json:"licenseType,omitempty"`
    MachineType *string `json:"machineType,omitempty"`
    MachineTypeSeries *string `json:"machineTypeSeries,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    NetworkInterfaces []NetworkInterface `json:"networkInterfaces,omitempty"`
    NetworkTags []string `json:"networkTags,omitempty"`
    Project *string `json:"project,omitempty"`
    SecureBoot *bool `json:"secureBoot,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    VMName *string `json:"vmName,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

