package shared

// DeviceState
// The device state, as reported by the device.
type DeviceState struct {
	BinaryData *string `json:"binaryData,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
