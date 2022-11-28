package shared

type LocalDiskInitializeParamsDiskTypeEnum string

const (
	LocalDiskInitializeParamsDiskTypeEnumDiskTypeUnspecified LocalDiskInitializeParamsDiskTypeEnum = "DISK_TYPE_UNSPECIFIED"
	LocalDiskInitializeParamsDiskTypeEnumPdStandard          LocalDiskInitializeParamsDiskTypeEnum = "PD_STANDARD"
	LocalDiskInitializeParamsDiskTypeEnumPdSsd               LocalDiskInitializeParamsDiskTypeEnum = "PD_SSD"
	LocalDiskInitializeParamsDiskTypeEnumPdBalanced          LocalDiskInitializeParamsDiskTypeEnum = "PD_BALANCED"
	LocalDiskInitializeParamsDiskTypeEnumPdExtreme           LocalDiskInitializeParamsDiskTypeEnum = "PD_EXTREME"
)

// LocalDiskInitializeParams
// Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
type LocalDiskInitializeParams struct {
	Description *string                                `json:"description,omitempty"`
	DiskName    *string                                `json:"diskName,omitempty"`
	DiskSizeGb  *string                                `json:"diskSizeGb,omitempty"`
	DiskType    *LocalDiskInitializeParamsDiskTypeEnum `json:"diskType,omitempty"`
	Labels      map[string]string                      `json:"labels,omitempty"`
}
