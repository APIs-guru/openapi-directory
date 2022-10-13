package shared

type DiskConfig struct {
	BootDiskSizeGb    *int32  `json:"bootDiskSizeGb"`
	BootDiskType      *string `json:"bootDiskType"`
	LocalSsdInterface *string `json:"localSsdInterface"`
	NumLocalSsds      *int32  `json:"numLocalSsds"`
}
