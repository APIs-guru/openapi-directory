package shared

type Device struct {
	DiskID   *int64 `json:"disk_id"`
	VolumeID *int64 `json:"volume_id"`
}
