package shared

type PowerPortTemplate struct {
	DeviceType NestedDeviceType `json:"device_type"`
	ID         *int64           `json:"id"`
	Name       string           `json:"name"`
}
