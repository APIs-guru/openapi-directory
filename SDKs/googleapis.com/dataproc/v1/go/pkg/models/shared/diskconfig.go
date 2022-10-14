package shared

type DiskConfig struct {
	BootDiskSizeGb    *int32  `json:"bootDiskSizeGb,omitempty"`
	BootDiskType      *string `json:"bootDiskType,omitempty"`
	LocalSsdInterface *string `json:"localSsdInterface,omitempty"`
	NumLocalSsds      *int32  `json:"numLocalSsds,omitempty"`
}
