package shared

// Disk
// Carries information about a disk that can be attached to a VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. Specify either `Volume` or `Disk`, but not both.
type Disk struct {
	Name        *string `json:"name,omitempty"`
	SizeGb      *int32  `json:"sizeGb,omitempty"`
	SourceImage *string `json:"sourceImage,omitempty"`
	Type        *string `json:"type,omitempty"`
}
