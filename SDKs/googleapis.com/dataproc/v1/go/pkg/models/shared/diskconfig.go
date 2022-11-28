package shared

// DiskConfig
// Specifies the config of disk options for a group of VM instances.
type DiskConfig struct {
	BootDiskSizeGb    *int32  `json:"bootDiskSizeGb,omitempty"`
	BootDiskType      *string `json:"bootDiskType,omitempty"`
	LocalSsdInterface *string `json:"localSsdInterface,omitempty"`
	NumLocalSsds      *int32  `json:"numLocalSsds,omitempty"`
}
