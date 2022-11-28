package shared

// PersistentDisk
// Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.
type PersistentDisk struct {
	SizeGb      *int32  `json:"sizeGb,omitempty"`
	SourceImage *string `json:"sourceImage,omitempty"`
	Type        *string `json:"type,omitempty"`
}
