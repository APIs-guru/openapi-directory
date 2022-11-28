package shared

type AttachedDiskModeEnum string

const (
	AttachedDiskModeEnumDiskModeUnspecified AttachedDiskModeEnum = "DISK_MODE_UNSPECIFIED"
	AttachedDiskModeEnumReadWrite           AttachedDiskModeEnum = "READ_WRITE"
	AttachedDiskModeEnumReadOnly            AttachedDiskModeEnum = "READ_ONLY"
)

// AttachedDisk
// A node-attached disk resource. Next ID: 8;
type AttachedDisk struct {
	Mode       *AttachedDiskModeEnum `json:"mode,omitempty"`
	SourceDisk *string               `json:"sourceDisk,omitempty"`
}
