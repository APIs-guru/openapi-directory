package shared



type Disk struct {
    DiskType *string `json:"diskType,omitempty"`
    MountPoint *string `json:"mountPoint,omitempty"`
    SizeGb *int32 `json:"sizeGb,omitempty"`
    
}

