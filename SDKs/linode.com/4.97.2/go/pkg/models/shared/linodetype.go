package shared



type LinodeTypeAddonsBackupsPrice struct {
    Hourly *int64 `json:"hourly,omitempty"`
    Monthly *int64 `json:"monthly,omitempty"`
    
}

type LinodeTypeAddonsBackups struct {
    Price *LinodeTypeAddonsBackupsPrice `json:"price,omitempty"`
    
}

type LinodeTypeAddons struct {
    Backups *LinodeTypeAddonsBackups `json:"backups,omitempty"`
    
}


type LinodeTypeClassEnum string

const (
    LinodeTypeClassEnumNanode LinodeTypeClassEnum = "nanode"
LinodeTypeClassEnumStandard LinodeTypeClassEnum = "standard"
LinodeTypeClassEnumDedicated LinodeTypeClassEnum = "dedicated"
LinodeTypeClassEnumGpu LinodeTypeClassEnum = "gpu"
LinodeTypeClassEnumHighmem LinodeTypeClassEnum = "highmem"
)


type LinodeTypePrice struct {
    Hourly *int64 `json:"hourly,omitempty"`
    Monthly *int64 `json:"monthly,omitempty"`
    
}

type LinodeType struct {
    Addons *LinodeTypeAddons `json:"addons,omitempty"`
    Class *LinodeTypeClassEnum `json:"class,omitempty"`
    Disk *int64 `json:"disk,omitempty"`
    Gpus *int64 `json:"gpus,omitempty"`
    ID *string `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Memory *int64 `json:"memory,omitempty"`
    NetworkOut *int64 `json:"network_out,omitempty"`
    Price *LinodeTypePrice `json:"price,omitempty"`
    Successor *string `json:"successor,omitempty"`
    Transfer *int64 `json:"transfer,omitempty"`
    Vcpus *int64 `json:"vcpus,omitempty"`
    
}

