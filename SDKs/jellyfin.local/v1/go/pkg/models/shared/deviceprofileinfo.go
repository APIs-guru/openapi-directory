package shared

type DeviceProfileInfo struct {
	ID   *string                `json:"Id"`
	Name *string                `json:"Name"`
	Type *DeviceProfileTypeEnum `json:"Type"`
}
