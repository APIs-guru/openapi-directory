package shared




type LocalDiskInitializeParamsDiskTypeEnum string

const (
    LocalDiskInitializeParamsDiskTypeEnumDiskTypeUnspecified LocalDiskInitializeParamsDiskTypeEnum = "DISK_TYPE_UNSPECIFIED"
LocalDiskInitializeParamsDiskTypeEnumPdStandard LocalDiskInitializeParamsDiskTypeEnum = "PD_STANDARD"
LocalDiskInitializeParamsDiskTypeEnumPdSsd LocalDiskInitializeParamsDiskTypeEnum = "PD_SSD"
LocalDiskInitializeParamsDiskTypeEnumPdBalanced LocalDiskInitializeParamsDiskTypeEnum = "PD_BALANCED"
LocalDiskInitializeParamsDiskTypeEnumPdExtreme LocalDiskInitializeParamsDiskTypeEnum = "PD_EXTREME"
)


type LocalDiskInitializeParams struct {
    Description *string `json:"description,omitempty"`
    DiskName *string `json:"diskName,omitempty"`
    DiskSizeGb *string `json:"diskSizeGb,omitempty"`
    DiskType *LocalDiskInitializeParamsDiskTypeEnum `json:"diskType,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    
}

