package shared

type DeviceProfileInfo struct {
	ID   *string                `json:"Id,omitempty"`
	Name *string                `json:"Name,omitempty"`
	Type *DeviceProfileTypeEnum `json:"Type,omitempty"`
}
