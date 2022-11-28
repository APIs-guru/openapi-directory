package shared

// ExistingDisk
// Configuration for an existing disk to be attached to the VM.
type ExistingDisk struct {
	Disk *string `json:"disk,omitempty"`
}
