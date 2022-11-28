package shared

// DeviceConfig
// The device configuration. Eventually delivered to devices.
type DeviceConfig struct {
	BinaryData      *string `json:"binaryData,omitempty"`
	CloudUpdateTime *string `json:"cloudUpdateTime,omitempty"`
	DeviceAckTime   *string `json:"deviceAckTime,omitempty"`
	Version         *string `json:"version,omitempty"`
}
