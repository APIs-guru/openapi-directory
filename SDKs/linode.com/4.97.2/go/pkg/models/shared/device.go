package shared

// Device
// Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
// Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
type Device struct {
	DiskID   *int64 `json:"disk_id,omitempty"`
	VolumeID *int64 `json:"volume_id,omitempty"`
}
