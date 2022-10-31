package shared

type AttachedDiskModeEnum string

const (
	AttachedDiskModeEnumDiskModeUnspecified AttachedDiskModeEnum = "DISK_MODE_UNSPECIFIED"
	AttachedDiskModeEnumReadWrite           AttachedDiskModeEnum = "READ_WRITE"
	AttachedDiskModeEnumReadOnly            AttachedDiskModeEnum = "READ_ONLY"
)

type AttachedDisk struct {
	Mode       *AttachedDiskModeEnum `json:"mode,omitempty"`
	SourceDisk *string               `json:"sourceDisk,omitempty"`
}
