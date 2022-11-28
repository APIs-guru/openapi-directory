package shared

// DiskStatus
// The status of a disk on a VM.
type DiskStatus struct {
	FreeSpaceBytes  *string `json:"freeSpaceBytes,omitempty"`
	TotalSpaceBytes *string `json:"totalSpaceBytes,omitempty"`
}
