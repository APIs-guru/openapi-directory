package shared

// Disk
// Describes the data disk used by a workflow job.
type Disk struct {
	DiskType   *string `json:"diskType,omitempty"`
	MountPoint *string `json:"mountPoint,omitempty"`
	SizeGb     *int32  `json:"sizeGb,omitempty"`
}
