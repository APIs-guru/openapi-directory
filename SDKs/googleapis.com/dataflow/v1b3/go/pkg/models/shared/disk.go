package shared

type Disk struct {
	DiskType   *string `json:"diskType"`
	MountPoint *string `json:"mountPoint"`
	SizeGb     *int32  `json:"sizeGb"`
}
