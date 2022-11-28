package shared

// Volume
// Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.
type Volume struct {
	ExistingDisk   *ExistingDisk   `json:"existingDisk,omitempty"`
	NfsMount       *NfsMount       `json:"nfsMount,omitempty"`
	PersistentDisk *PersistentDisk `json:"persistentDisk,omitempty"`
	Volume         *string         `json:"volume,omitempty"`
}
