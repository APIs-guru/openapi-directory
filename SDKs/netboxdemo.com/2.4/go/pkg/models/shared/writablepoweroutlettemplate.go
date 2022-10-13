package shared

type WritablePowerOutletTemplate struct {
	DeviceType int64  `json:"device_type"`
	ID         *int64 `json:"id"`
	Name       string `json:"name"`
}
