package shared

// GoogleCloudMlV1DiskConfig
// Represents the config of disk options.
type GoogleCloudMlV1DiskConfig struct {
	BootDiskSizeGb *int32  `json:"bootDiskSizeGb,omitempty"`
	BootDiskType   *string `json:"bootDiskType,omitempty"`
}
