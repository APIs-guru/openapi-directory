package shared

type DiskAttachment struct {
	DeviceName *string `json:"deviceName,omitempty"`
	Index      *int64  `json:"index,omitempty"`
}
