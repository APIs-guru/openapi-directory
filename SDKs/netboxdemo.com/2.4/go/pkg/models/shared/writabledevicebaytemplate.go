package shared

type WritableDeviceBayTemplate struct {
	DeviceType int64  `json:"device_type"`
	ID         *int64 `json:"id,omitempty"`
	Name       string `json:"name"`
}
