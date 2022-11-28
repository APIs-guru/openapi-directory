package shared

// DiskAttachment
// Specifies how to attach a disk to a Replica.
type DiskAttachment struct {
	DeviceName *string `json:"deviceName,omitempty"`
	Index      *int64  `json:"index,omitempty"`
}
